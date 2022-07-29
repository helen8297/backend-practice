const sql = require("./db.js");

async function getAllEvents() {
  const data = await query(`SELECT * FROM bootcampers ORDER BY surname ASC`);
  console.log(`GET: getallbootcampers Results:`, data.rows);
  return data.rows;
}

async function getAllEvents() {
  const data = await sql.query(`SELECT * FROM events`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      return;
    }
    console.log("events: ", res);
    return data;
  });
}

module.exports = {
  getAllEvents,
};
