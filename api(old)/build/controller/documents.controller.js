"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDocumentById = exports.getDocuments = exports.getDocumentById = exports.getDocumentByCompany = exports.deleteDocumentById = exports.createDocument = void 0;

var _Document = _interopRequireDefault(require("../models/Document"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createDocument = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, category, date, creatorUserId, verifierUserId, company, fileURL, newDocument, documentSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //console.log(req.body)
            _req$body = req.body, name = _req$body.name, category = _req$body.category, date = _req$body.date, creatorUserId = _req$body.creatorUserId, verifierUserId = _req$body.verifierUserId, company = _req$body.company, fileURL = _req$body.fileURL;
            newDocument = new _Document["default"]({
              name: name,
              category: category,
              date: date,
              creatorUserId: creatorUserId,
              verifierUserId: verifierUserId,
              company: company,
              fileURL: fileURL
            });
            _context.next = 4;
            return newDocument.save();

          case 4:
            documentSaved = _context.sent;
            res.status(201).json(documentSaved);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createDocument(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createDocument = createDocument;

var getDocuments = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var documents;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Document["default"].find();

          case 2:
            documents = _context2.sent;
            return _context2.abrupt("return", res.json(documents));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getDocuments(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getDocuments = getDocuments;

var getDocumentById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var document;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Document["default"].findById(req.params.documentId);

          case 2:
            document = _context3.sent;
            return _context3.abrupt("return", res.status(200).json(document));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getDocumentById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getDocumentById = getDocumentById;

var getDocumentByCompany = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var document;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Document["default"].findByCompany(req.params.company);

          case 2:
            document = _context4.sent;
            return _context4.abrupt("return", res.status(200).json(document));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getDocumentByCompany(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getDocumentByCompany = getDocumentByCompany;

var updateDocumentById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var updatedDocument;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Document["default"].findByIdAndUpdate(req.params.documentId, req.body, {
              "new": true
            });

          case 2:
            updatedDocument = _context5.sent;
            return _context5.abrupt("return", res.status(204).json(updatedDocument));

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateDocumentById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateDocumentById = updateDocumentById;

var deleteDocumentById = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var documentId;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            documentId = req.params.documentId;
            _context6.next = 3;
            return _Document["default"].findByIdAndDelete(documentId);

          case 3:
            return _context6.abrupt("return", res.status(204).json());

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteDocumentById(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteDocumentById = deleteDocumentById;