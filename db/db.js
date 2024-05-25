const postgres = require("postgres");

const connectionSQL = process.env.DATABASE_URL;
const sql = postgres(connectionSQL);

module.exports = sql;
