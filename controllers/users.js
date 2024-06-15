const User = require('../models/user');
const { sendEmail } = require('../utils/sendEmail');
const crypto = require('crypto');



module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}

module.exports.register = async (req, res, next) => {
    try {
        const { username, email, password, firstName, lastName  } = req.body;
        const user = new User({
            email,
            username,
            firstName,
            lastName
        })
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome to YelpCamp');
            res.redirect('/campgrounds');
        });
        
    } catch (err) {
        if (err.code === 11000) {
            req.flash('error', 'A user with the given email is already registered!');
        } else {
            req.flash('error', err.message);
        }
        res.redirect('/register')
    }
    
}

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
}

// use the storeReturnTo middleware to save the returnTo value from session to res.locals
// passport.authenticate logs the user in and clears req.session
// Now we can use res.locals.returnTo to redirect the user after login

module.exports.login = (req, res) => {
    req.flash('success', 'Welcome back!');
    const redirectUrl = res.locals.returnTo || '/campgrounds';
    delete req.session.returnTo
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'You have successfully logged out');
        res.redirect('/campgrounds');
    });
}

module.exports.renderForgot = (req, res, next) => {
    res.render('users/forgot');
}

module.exports.forgot = async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        req.flash('error', 'No account with that email address exists');
        return res.redirect('/forgot');
    }
    const resetToken = user.createPasswordToken();
    await user.save();
    const resetUrl = `${req.protocol}://${req.get('host')}/reset/${resetToken}`
    const message = `You are receiving this because you (or someone else) have requested the reset of the password for your account. Please click on the following link, or paste this into your browser to complete the process:\n\n
                    ${resetUrl} \n\n
                    If you did not request this, please ignore this email and your password will remain unchanged.\n`
    
    try {
        await sendEmail({
            email: user.email,
            subject: 'Password Change Request Received',
            message
        })

        req.flash('success', `An e-mail has been sent to ${user.email} with further instructions!`)
        res.redirect('/forgot')

    } catch(err) {
        user.resetPasswordToken = undefined
        user.resetPasswordExpires = undefined
        await user.save()
        req.flash('error', `There was an error sending password reset email! Please try again later.`)
        res.redirect('/forgot')
    }
    
}

module.exports.renderReset = async (req, res, next) => {
    const token  = crypto.createHash('sha256').update(req.params.token).digest('hex');
    const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });
    if (!user) {
        req.flash('error', 'Password reset token is invalid or has expired.');
        return res.redirect('/forgot');
    }
    res.render('users/reset', { token: req.params.token });
}


module.exports.reset = async (req, res, next) => {

    const token = crypto.createHash('sha256').update(req.params.token).digest('hex');
    const user = await User.findOne({ 
        resetPasswordToken: token, 
        resetPasswordExpires: { $gt: Date.now() } 
    });

    if (!user) {
        req.flash('error', 'Password reset token is invalid or has expired.');
        return res.redirect('/forgot');
    }
    try {
        if (req.body.password === req.body.confirm) {
            await user.setPassword(req.body.password); 
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
            await user.save();
            
            req.login(user, err => {
                if (err) return next(err);
                req.flash('success', 'Welcome to YelpCamp');
                return res.redirect('/campgrounds');
            });
        } else {
            req.flash('error', 'Passwords do not match!');
            res.redirect(`/reset/${req.params.token}`);
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
    
}