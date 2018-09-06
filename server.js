// Dependencies
// ===================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require('dotenv').config();

// const mongoose = require("mongoose");
// var logger = require("morgan");

// Initialize Express
// =====================================
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the Mongo DB
// let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/artdb";
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI, function(error) {
//     // Log any errors connecting with mongoose
//     if (error) {
//       console.error(error);
//     }
//     // Or log a success message
//     else {
//       console.log("mongoose connection is successful");
//     }
//   });

//Mlab credentails commented out below
//mongodb://<Project3Users>:<Password123>@ds121674.mlab.com:21674/heroku_8x7lz6hg
//mongo ds121674.mlab.com:21674/heroku_8x7lz6hg -u <Project3Users> -p <Password123>


// Use express.static to serve the public folder as a static directory
// app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
 //

// Routes
// =====================================
let apiRoutes = require("./routes/index");
app.use("/api", apiRoutes);
 // !!!change to "../client/build/index.html" once we have a build folder
 app.use("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

// !!not sure we need the below code with pulling in the routes (not finished).
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
