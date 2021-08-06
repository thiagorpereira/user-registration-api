"use strict";

var _express = _interopRequireDefault(require("express"));

require("./database");

require("./shared/container");

var _routes = require("./routes");

var _upload = _interopRequireDefault(require("./config/upload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use("/avatar", _express.default.static(`${_upload.default.tmpFolder}/avatar`));
app.use(_routes.router);
app.listen(3333, () => console.log("Server is running!"));