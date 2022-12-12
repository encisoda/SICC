"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var documentSchema = new _mongoose.Schema({
  name: String,
  category: String,
  date: Date,
  creatorUserId: Number,
  verifierUserId: Number,
  company: String,
  fileURL: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Document', documentSchema);

exports["default"] = _default;