const nodemailer = require('nodemailer');


module.exports.sendEmail = async (option) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN
        }
      });
    
    
      const mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: option.email,
        subject: option.subject,
        text: option.message
      };
    
      await transporter.sendMail(mailOptions);
}

