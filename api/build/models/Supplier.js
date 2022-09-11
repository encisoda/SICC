"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var supplierSchema = new _mongoose.Schema({
  businessName: String,
  CUIT: Number
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Supplier', supplierSchema);

exports["default"] = _default;