const sql = require("../db/db.js");

async function addUser(person) {
  try {
    if(person.email === undefined || person.name === undefined || person.phone_number === undefined || person.address === undefined){
        return {error: "Missing information"};
    }
    return await sql`
         INSERT INTO users (email, name, phone_number, address)
         VALUES (${person.email}, ${person.name}, ${person.phone_number}, ${person.address})
        `;
  } catch (error) {
    if (error.code === "23505" && error.constraint === "users_email_key") {
      console.log("User already exists");
      return { error: "User already exists" };
    }
    console.log(error);
    return false;
  }
}

module.exports = { addUser };
