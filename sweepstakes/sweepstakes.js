const {addUser} = require("../db/user.js");

async function addToSweepstakes(person){
    return await addUser(person);
}


// TODO implement getAllSweepstakes
function getAllSweepstakes(){
    console.log("Getting all sweepstakes");
}

module.exports = { addToSweepstakes, getAllSweepstakes };