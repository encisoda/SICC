"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _documents = _interopRequireDefault(require("./routes/documents.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _supplier = _interopRequireDefault(require("./routes/supplier.routes"));

var _person = _interopRequireDefault(require("./routes/person.router"));

var _initialSetup = require("./libs/initialSetup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _initialSetup.createRoles)(); //var cors = require('cors');
//app.use(cors());
// Middlewares

var corsOptions = {// origin: "http://localhost:3000",
};
app.set('pkg', _package["default"]);
app.use((0, _cors["default"])(corsOptions));
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.use((0, _helmet["default"])());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.get('/', function (req, res) {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  });
}); // Routes

app.use('/api/documents', _documents["default"]);
app.use("/api/users", _user["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/api/persons', _person["default"]); //app.use('/api/vehicles', vehiclesRoutes);

app.use('/api/suppliers', _supplier["default"]);
var _default = app;
exports["default"] = _default;