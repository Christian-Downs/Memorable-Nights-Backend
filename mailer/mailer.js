const addToSweepstakes = require("../api/addToSweepstakes");

function sendMail(email, subject, message, res) {

  // Add user to sweepstakes
  try {
    addToSweepstakes(email);
  } catch (error) {
    console.log("Error adding user to sweepstakes: " + error);
  }

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
    to: process.env.MAIL_AUTH_USER + ", " + "christian.downs.15@gmail.com, MEMORABLENIGHTSSLEEPOVERS@GMAIL.COM",
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
