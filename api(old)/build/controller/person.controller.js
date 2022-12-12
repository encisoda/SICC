"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPerson = void 0;

var _Person = _interopRequireDefault(require("../models/Person"));

var _Document = _interopRequireDefault(require("../models/Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createPerson = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, surname, CUIT, position, documents, documentsFound, newPerson, personSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, surname = _req$body.surname, CUIT = _req$body.CUIT, position = _req$body.position, documents = _req$body.documents;
            _context.next = 3;
            return _Document["default"].find({
              name: {
                $in: documents
              }
            });

          case 3:
            documentsFound = _context.sent;
            newPerson = new _Person["default"]({
              name: name,
              surname: surname,
              CUIT: CUIT,
              position: position,
              documents: documentsFound.map(function (document) {
                return document._id;
              })
            });
            _context.next = 7;
            return newPerson.save();

          case 7:
            personSaved = _context.sent;
            res.status(201).json(personSaved);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createPerson(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createPerson = createPerson;