require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const sendMail = require("../mailer/mailer.js");
app.use(express.json());
app.use(cors());

app.post("/api/server/sendEmail", (req, res) => {
  console.log(process.env.MAIL_AUTH_USER, process.env.MAIL_AUTH_PASSWORD);
  console.log(req.body);
  const { email, subject, message } = req.body;
  console.log(email, subject, message);
  sendMail(email, subject, message, res);
  
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
