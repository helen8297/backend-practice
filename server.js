require("dotenv").config();
const express = require("express");
const eventsRouter = require("./app/routes/events.routes.js");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //take this out?

// simple route
app.get("/health", (req, res) => {
  res.json({ message: "I am working!" });
});

app.use(eventsRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}.`);
});
