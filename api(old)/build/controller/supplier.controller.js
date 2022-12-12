"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSupplierById = exports.getSuppliers = exports.getSupplierById = exports.deleteSupplierById = exports.createSupplier = void 0;

var _Supplier = _interopRequireDefault(require("../models/Supplier"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createSupplier = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, businessName, CUIT, newSupplier, supplierSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, businessName = _req$body.businessName, CUIT = _req$body.CUIT;
            newSupplier = new _Supplier["default"]({
              businessName: businessName,
              CUIT: CUIT
            });
            _context.next = 4;
            return newSupplier.save();

          case 4:
            supplierSaved = _context.sent;
            res.status(201).json(supplierSaved);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createSupplier(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createSupplier = createSupplier;

var getSuppliers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var suppliers;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Supplier["default"].find();

          case 2:
            suppliers = _context2.sent;
            return _context2.abrupt("return", res.json(suppliers));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getSuppliers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getSuppliers = getSuppliers;

var getSupplierById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var supplier;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Supplier["default"].findById(req.params.supplierId);

          case 2:
            supplier = _context3.sent;
            return _context3.abrupt("return", res.status(200).json(supplier));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getSupplierById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getSupplierById = getSupplierById;

var updateSupplierById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var updatedSupplier;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Supplier["default"].findByIdAndUpdate(req.params.supplierId, req.body, {
              "new": true
            });

          case 2:
            updatedSupplier = _context4.sent;
            return _context4.abrupt("return", res.status(204).json(updatedSupplier));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateSupplierById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateSupplierById = updateSupplierById;

var deleteSupplierById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var supplierId;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            supplierId = req.params.supplierId;
            _context5.next = 3;
            return _Supplier["default"].findByIdAndDelete(supplierId);

          case 3:
            return _context5.abrupt("return", res.status(204).json());

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteSupplierById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteSupplierById = deleteSupplierById;