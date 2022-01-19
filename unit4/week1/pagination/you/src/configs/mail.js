const nodemailer = require('nodemailer');

require('dotenv').config();

// const {CURRENT_ENVIRONMENT,SMTP_USERNAME,SMTP_PASSWORD} = process.env;

module.exports = nodemailer.createTransport({
  host: process.env.CURRENT_ENVIRONMENT == "development" ? "smtp.mailtrap.io" : "",
  port: 465,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});
  
// module.exports = transporter;
