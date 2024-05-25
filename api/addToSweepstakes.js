const { addToSweepstakes } = require("../sweepstakes/sweepstakes.js");

module.exports = async (req, res) => {
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
