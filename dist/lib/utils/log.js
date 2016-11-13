'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = exports.Logger = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = getLogger;

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getLogger(logger) {
  return new (_get__('Logger'))(logger);
}

var Logger = exports.Logger = function () {
  function Logger(namespace) {
    _classCallCheck(this, Logger);

    this.debug = _get__('debug')(namespace);
  }

  _createClass(Logger, [{
    key: 'log',
    value: function log() {
      var _this = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return new Promise(function (resolve) {
        _this.debug.apply(_this, args);
        resolve(args);
      });
    }
  }]);

  return Logger;
}();

var _RewiredData__ = Object.create(null);

var INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';
var _RewireAPI__ = {};

(function () {
  function addPropertyToAPIObject(name, value) {
    Object.defineProperty(_RewireAPI__, name, {
      value: value,
      enumerable: false,
      configurable: true
    });
  }

  addPropertyToAPIObject('__get__', _get__);
  addPropertyToAPIObject('__GetDependency__', _get__);
  addPropertyToAPIObject('__Rewire__', _set__);
  addPropertyToAPIObject('__set__', _set__);
  addPropertyToAPIObject('__reset__', _reset__);
  addPropertyToAPIObject('__ResetDependency__', _reset__);
  addPropertyToAPIObject('__with__', _with__);
})();

function _get__(variableName) {
  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
    return _get_original__(variableName);
  } else {
    var value = _RewiredData__[variableName];

    if (value === INTENTIONAL_UNDEFINED) {
      return undefined;
    } else {
      return value;
    }
  }
}

function _get_original__(variableName) {
  switch (variableName) {
    case 'Logger':
      return Logger;

    case 'debug':
      return _debug2.default;
  }

  return undefined;
}

function _assign__(variableName, value) {
  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {
    return _set_original__(variableName, value);
  } else {
    return _RewiredData__[variableName] = value;
  }
}

function _set_original__(variableName, _value) {
  switch (variableName) {}

  return undefined;
}

function _update_operation__(operation, variableName, prefix) {
  var oldValue = _get__(variableName);

  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;

  _assign__(variableName, newValue);

  return prefix ? newValue : oldValue;
}

function _set__(variableName, value) {
  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {
    Object.keys(variableName).forEach(function (name) {
      _RewiredData__[name] = variableName[name];
    });
  } else {
    if (value === undefined) {
      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;
    } else {
      _RewiredData__[variableName] = value;
    }

    return function () {
      _reset__(variableName);
    };
  }
}

function _reset__(variableName) {
  delete _RewiredData__[variableName];
}

function _with__(object) {
  var rewiredVariableNames = Object.keys(object);
  var previousValues = {};

  function reset() {
    rewiredVariableNames.forEach(function (variableName) {
      _RewiredData__[variableName] = previousValues[variableName];
    });
  }

  return function (callback) {
    rewiredVariableNames.forEach(function (variableName) {
      previousValues[variableName] = _RewiredData__[variableName];
      _RewiredData__[variableName] = object[variableName];
    });
    var result = callback();

    if (!!result && typeof result.then == 'function') {
      result.then(reset).catch(reset);
    } else {
      reset();
    }

    return result;
  };
}

var _typeOfOriginalExport = typeof getLogger === 'undefined' ? 'undefined' : _typeof(getLogger);

function addNonEnumerableProperty(name, value) {
  Object.defineProperty(getLogger, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}

if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(getLogger)) {
  addNonEnumerableProperty('__get__', _get__);
  addNonEnumerableProperty('__GetDependency__', _get__);
  addNonEnumerableProperty('__Rewire__', _set__);
  addNonEnumerableProperty('__set__', _set__);
  addNonEnumerableProperty('__reset__', _reset__);
  addNonEnumerableProperty('__ResetDependency__', _reset__);
  addNonEnumerableProperty('__with__', _with__);
  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

exports.__get__ = _get__;
exports.__GetDependency__ = _get__;
exports.__Rewire__ = _set__;
exports.__set__ = _set__;
exports.__ResetDependency__ = _reset__;
exports.__RewireAPI__ = _RewireAPI__;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9saWIvdXRpbHMvbG9nLmpzIl0sIm5hbWVzIjpbImdldExvZ2dlciIsImxvZ2dlciIsIkxvZ2dlciIsIm5hbWVzcGFjZSIsImRlYnVnIiwiYXJncyIsIlByb21pc2UiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztrQkFFd0JBLFM7O0FBRnhCOzs7Ozs7OztBQUVlLFNBQVNBLFNBQVQsQ0FBb0JDLE1BQXBCLEVBQTRCO0FBQ3pDLFNBQU8sdUJBQVdBLE1BQVgsQ0FBUDtBQUNEOztJQUVZQyxNLFdBQUFBLE07QUFDWCxrQkFBYUMsU0FBYixFQUF3QjtBQUFBOztBQUN0QixTQUFLQyxLQUFMLEdBQWEsZ0JBQU1ELFNBQU4sQ0FBYjtBQUNEOzs7OzBCQUVhO0FBQUE7O0FBQUEsd0NBQU5FLElBQU07QUFBTkEsWUFBTTtBQUFBOztBQUNaLGFBQU8sSUFBSUMsT0FBSixDQUNMLG1CQUFXO0FBQ1QsY0FBS0YsS0FBTCxjQUFjQyxJQUFkO0FBQ0FFLGdCQUFRRixJQUFSO0FBQ0QsT0FKSSxDQUFQO0FBTUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQWhCcUJMLFMseUNBQUFBLFM7Ozt3QkFBQUEsUzs7Ozs7Ozt3R0FBQUEsUyIsImZpbGUiOiJsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExvZ2dlciAobG9nZ2VyKSB7XG4gIHJldHVybiBuZXcgTG9nZ2VyKGxvZ2dlcilcbn1cblxuZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gIGNvbnN0cnVjdG9yIChuYW1lc3BhY2UpIHtcbiAgICB0aGlzLmRlYnVnID0gZGVidWcobmFtZXNwYWNlKVxuICB9XG5cbiAgbG9nICguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKFxuICAgICAgcmVzb2x2ZSA9PiB7XG4gICAgICAgIHRoaXMuZGVidWcoLi4uYXJncylcbiAgICAgICAgcmVzb2x2ZShhcmdzKVxuICAgICAgfVxuICAgIClcbiAgfVxufVxuIl19