require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const sendMail = require("../mailer/mailer.js");
const { addToSweepstakes, getAllSweepstakes } = require("../sweepstakes/sweepstakes.js");


const corsOptions = {
  origin: [
    "https://memorablenights.vip",
    "https://inventory-management-3kwm.vercel.app/",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));


app.use(express.json());
app.post("/api/sendEmail.js", (req, res) => {
  console.log(process.env.MAIL_AUTH_USER, process.env.MAIL_AUTH_PASSWORD);
  console.log(req.body);
  const { email, subject, message } = req.body;
  console.log(email, subject, message);
  sendMail(email, subject, message, res);
  
});

app.post("/api/addToSweepstakes.js", async (req, res) => {
  try {
    const { email, name, phone_number, address } = req.body;
    const person = { email:email, name:name, phone_number:phone_number, address:address };

    const added = await addToSweepstakes(person);

    if(!added || added.error){
      res.status(401).json({ success: false, reason: "User already exists"});
    } else {
      res.status(200).json({ success: true });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false });
  }
  

});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
