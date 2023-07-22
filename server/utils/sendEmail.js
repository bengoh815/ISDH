const nodemailer = require("nodemailer");

module.exports = async (recipient, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_APP_PASS,
    },
  });

  const option = {
    from: process.env.EMAIL,
    to: recipient,
    subject: subject,
    text: text,
  };

  transporter.sendMail(option, function (error, info) {
    if (error) {
      throw new Error(`${error.name} SMTP: ${error.data}`);
    }
    return info;
  });
};
