"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes = (0, express_1.Router)();
routes.get('/', function (request, response) {
    return response.json({ message: 'Hello World!' });
});
exports["default"] = routes;
