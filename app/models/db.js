const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

console.log("dotenv", process.env.DB_PASSWORD);

// open the MySQL connection
connection.connect((error) => {
  // if (error) throw error;
  // console.log("Successfully connected to the database.");

  if (error) {
    console.error("error connecting: " + error.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
module.exports = connection;
