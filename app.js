const express = require("express");
const app = express();

const dotenv = require("dotenv");

// Config
dotenv.config({path: "config/config.env"});

app.use( express.json() );

// Importing Routes 
const user = require("./routes/userRoutes");
app.use("/api/v1", user);

module.exports = app;