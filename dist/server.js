"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1["default"])();
var port = 3333;
app.use(routes_1["default"]);
app.listen(port, function () { return console.log("server is listening on ".concat(port)); });
