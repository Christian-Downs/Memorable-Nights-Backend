const sendMail = require("../mailer/mailer.js");
const cors = require("cors");

const corsOptions = {
  origin: [
    "https://memorablenights.vip",
    "https://inventory-management-3kwm.vercel.app/",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
const handler = (req, res) => {
  const { email, subject, message } = req.body;
  sendMail(email, subject, message, res);
};

module.exports = (req, res) => {
  const corsHandler = cors(corsOptions);
  corsHandler(req, res, () => handler(req, res));
};
