const express = require("express");
const routes = express.Router();
const adminCtl = require("../controller/adminCtl");
const admin = require("../models/adminTbl");
const db = require("../config/db");

routes.get("/", adminCtl.home);
routes.get("/api", adminCtl.api);
routes.get("/movies", adminCtl.ui);

module.exports = routes;
