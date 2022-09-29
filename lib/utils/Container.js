'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

var _container = /*#__PURE__*/new WeakMap();

var _ModuleModelName = /*#__PURE__*/new WeakMap();

var Container = /*#__PURE__*/function () {
  function Container() {
    _classCallCheck(this, Container);

    _classPrivateFieldInitSpec(this, _container, {
      writable: true,
      value: []
    });

    _classPrivateFieldInitSpec(this, _ModuleModelName, {
      writable: true,
      value: void 0
    });
  }

  _createClass(Container, [{
    key: "set",
    value:
    /**
     * @description Setup model db
     * @param {String} name Vaiabel penampung nama model 
     * @param {Object} model Object berisi data model
     */
    function set(name, model) {
      _classPrivateFieldGet(this, _container).push({
        name: name,
        model: model
      });
    }
    /**
     * @description Pencocokan model berdasarkan nama model
     * @param {String} name Vaiabel penampung nama model
     */

  }, {
    key: "setModuleModelName",
    set: function set(name) {
      _classPrivateFieldSet(this, _ModuleModelName, _classPrivateFieldGet(this, _container).filter(function (models) {
        return models.name === name;
      }));
    }
    /**
     * @description Mengebalikan model yang valid
     * @returns Object model
     */

  }, {
    key: "getModuleModelName",
    get: function get() {
      return _classPrivateFieldGet(this, _ModuleModelName);
    }
  }]);

  return Container;
}();

exports.Container = Container;