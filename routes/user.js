const express = require("express");
const passport = require("passport");
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const { storeReturnTo } = require('../middleware');
const users = require('../controllers/users')


router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register))

router.route('/login')
    .get(users.renderLogin)
    .post(storeReturnTo, passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), users.login)


router.get('/logout', users.logout)

router.route('/forgot')
    .get(users.renderForgot)
    .post(catchAsync(users.forgot))

router.route('/reset/:token')
    .get(catchAsync(users.renderReset))
    .post(catchAsync(users.reset))



module.exports = router;