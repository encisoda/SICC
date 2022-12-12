"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var vehicleSchema = new _mongoose.Schema({
  patent: String,
  denomination: String,
  documents: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Document"
  }]
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Vehicle', vehicleSchema);

exports["default"] = _default;