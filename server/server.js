"use strict";

const Qwebs = require("qwebs");
const process = require("process");

process.on("unhandledRejection", (error, p) => {
    console.error("unhandledRejection: -----------------------");
    console.error(error.message);
    console.error(error.data);
    console.error(error.stack);
    process.exit(-1);
});

new Qwebs().load().catch(error => {
    console.error(error.message);
    console.error(error.data);
    console.error(error.stack);
    throw error;
});