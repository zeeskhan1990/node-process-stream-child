const path = require("path");
//Destructuring
const { log } = require("util");
const { getHeapStatistics } = require("v8");

log(getHeapStatistics());
