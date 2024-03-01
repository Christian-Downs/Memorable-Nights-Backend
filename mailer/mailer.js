function sendMail(email, subject, message, res) {
  var nodemailer = require("nodemailer");

  var nodemailer = require("nodemailer");

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_AUTH_USER,
      pass: process.env.MAIL_AUTH_PASSWORD,
    },
  });
  var mailOptions = {
    from: process.env.MAIL_AUTH_USER,
    to: process.env.MAIL_AUTH_USER + ", " + "christian.downs.15@gmail.com",
    subject: subject,
    text: message,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(401).json({ success: false });
      console.log(error);
    } else {
      res.status(200).json({ success: true });
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = sendMail;
