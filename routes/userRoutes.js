const express = require("express");
const { registerUser } = require("../controllers/userControllers");

const routes = express.Router()

// User Routes
routes.get("/user", registerUser);

module.exports = routes;