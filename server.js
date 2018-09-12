// Dependencies
// ===================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require('dotenv').config();

// Initialize Express
// =====================================
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use express.static to serve the public folder as a static directory
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
// =====================================
let apiRoutes = require("./routes");
app.use("/api", apiRoutes);
 app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Starting server
// =====================================
app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
