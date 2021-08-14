const express = require("express");
const consign = require("consign")
const app = express();

consign({cwd: __dirname})
  .include('libs')
  .then('database.js')
  .then('libs/middlewares.js')
  .then('routes')
  .then('libs/boot.js')
  .into(app);


