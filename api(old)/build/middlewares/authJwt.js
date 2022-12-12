"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.isfullAdmin = exports.isControl = exports.isCarga = exports.isAdmin = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, decoded, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = req.headers["x-access-token"];
            console.log(token);

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              message: "No token provided"
            }));

          case 4:
            _context.prev = 4;
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            req.userId = decoded.id;
            _context.next = 9;
            return _User["default"].findById(req.userId, {
              password: 0
            });

          case 9:
            user = _context.sent;

            if (user) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: "No user found"
            }));

          case 12:
            next();
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](4);
            return _context.abrupt("return", res.status(401).json({
              message: "Unauthorized!"
            }));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 15]]);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var isCarga = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var user, roles, i;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _User["default"].findById(req.userId);

          case 3:
            user = _context2.sent;
            _context2.next = 6;
            return _Role["default"].find({
              _id: {
                $in: user.roles
              }
            });

          case 6:
            roles = _context2.sent;
            i = 0;

          case 8:
            if (!(i < roles.length)) {
              _context2.next = 15;
              break;
            }

            if (!(roles[i].name === "carga")) {
              _context2.next = 12;
              break;
            }

            next();
            return _context2.abrupt("return");

          case 12:
            i++;
            _context2.next = 8;
            break;

          case 15:
            return _context2.abrupt("return", res.status(403).json({
              message: "Require Moderator Role!"
            }));

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", res.status(500).send({
              message: _context2.t0
            }));

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 18]]);
  }));

  return function isCarga(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isCarga = isCarga;

var isAdmin = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var user, roles, i;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _User["default"].findById(req.userId);

          case 3:
            user = _context3.sent;
            _context3.next = 6;
            return _Role["default"].find({
              _id: {
                $in: user.roles
              }
            });

          case 6:
            roles = _context3.sent;
            i = 0;

          case 8:
            if (!(i < roles.length)) {
              _context3.next = 15;
              break;
            }

            if (!(roles[i].name === "admin")) {
              _context3.next = 12;
              break;
            }

            next();
            return _context3.abrupt("return");

          case 12:
            i++;
            _context3.next = 8;
            break;

          case 15:
            return _context3.abrupt("return", res.status(403).json({
              message: "Require Admin Role!"
            }));

          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            return _context3.abrupt("return", res.status(500).send({
              message: _context3.t0
            }));

          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 18]]);
  }));

  return function isAdmin(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isAdmin = isAdmin;

var isfullAdmin = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var user, roles, i;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _User["default"].findById(req.userId);

          case 3:
            user = _context4.sent;
            _context4.next = 6;
            return _Role["default"].find({
              _id: {
                $in: user.roles
              }
            });

          case 6:
            roles = _context4.sent;
            i = 0;

          case 8:
            if (!(i < roles.length)) {
              _context4.next = 15;
              break;
            }

            if (!(roles[i].name === "fullAdmin")) {
              _context4.next = 12;
              break;
            }

            next();
            return _context4.abrupt("return");

          case 12:
            i++;
            _context4.next = 8;
            break;

          case 15:
            return _context4.abrupt("return", res.status(403).json({
              message: "Require fullAdmin Role!"
            }));

          case 18:
            _context4.prev = 18;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            return _context4.abrupt("return", res.status(500).send({
              message: _context4.t0
            }));

          case 22:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 18]]);
  }));

  return function isfullAdmin(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.isfullAdmin = isfullAdmin;

var isControl = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
    var user, roles, i;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _User["default"].findById(req.userId);

          case 3:
            user = _context5.sent;
            _context5.next = 6;
            return _Role["default"].find({
              _id: {
                $in: user.roles
              }
            });

          case 6:
            roles = _context5.sent;
            i = 0;

          case 8:
            if (!(i < roles.length)) {
              _context5.next = 15;
              break;
            }

            if (!(roles[i].name === "control")) {
              _context5.next = 12;
              break;
            }

            next();
            return _context5.abrupt("return");

          case 12:
            i++;
            _context5.next = 8;
            break;

          case 15:
            return _context5.abrupt("return", res.status(403).json({
              message: "Require control Role!"
            }));

          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            return _context5.abrupt("return", res.status(500).send({
              message: _context5.t0
            }));

          case 22:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 18]]);
  }));

  return function isControl(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

exports.isControl = isControl;