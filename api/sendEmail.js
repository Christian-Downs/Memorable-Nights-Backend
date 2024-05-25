const sendMail = require("../mailer/mailer.js");

module.exports = (req, res) => {
  const { email, subject, message } = req.body;
  sendMail(email, subject, message, res);
};
