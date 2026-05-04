const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./database/db");
connectDB();

app.use(express.json());

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

// test
app.get("/", (req, res) => {
  res.send("API marche 🚀");
});

app.listen(5000, () => {
  console.log("Server running 🚀");
});