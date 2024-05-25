const { addToSweepstakes } = require("../sweepstakes/sweepstakes.js");
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

const handler = async (req, res) => {
  try {
    const { email, name, phone_number, address } = req.body;
    const person = { email, name, phone_number, address };

    const added = await addToSweepstakes(person);

    if (!added || added.error) {
      res.status(401).json({ success: false, reason: "User already exists" });
    } else {
      res.status(200).json({ success: true });
    }
  } catch (error) {
    console.log(error);
    res.status(401).json({ success: false });
  }
};

module.exports = (req, res) => {
  const corsHandler = cors(corsOptions);
  corsHandler(req, res, () => handler(req, res));
};
