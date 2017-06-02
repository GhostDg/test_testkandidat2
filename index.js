"use strict";

var APP_PORT = process.env.port || 3000;
var fs = require("fs");
var https = require("https");
var express = require("express");
var app = express();

app.use("/", express.static("src"));

if (process.env.NODE_ENV !== "production") {
    https.createServer({
        key: fs.readFileSync("./certs/key.pem"),
        cert: fs.readFileSync("./certs/cert.pem")
    }, app).listen(APP_PORT, function () {
        console.log("Server running in development mode on port %s.", APP_PORT);
    });
} else {
    app.listen(APP_PORT, function () {
        console.log("Server running in production mode on port %s.", APP_PORT);
    });
}
