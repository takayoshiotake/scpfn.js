"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var scpfn = {
  let: function _let(obj, block) {
    return block(obj);
  },
  also: function also(obj, block) {
    block(obj);
    return obj;
  },
  inject: function inject(target) {
    target.let = function (block) {
      return scpfn.let(this, block);
    };

    target.also = function (block) {
      return scpfn.also(this, block);
    };
  }
};
var _default = scpfn;
exports.default = _default;