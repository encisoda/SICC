"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var personSchema = new _mongoose.Schema({
  name: String,
  surname: String,
  CUIT: Number,
  position: String,
  documents: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Document"
  }]
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)('Person', personSchema);

exports["default"] = _default;