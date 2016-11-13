'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.requestInputMapping = requestInputMapping;
exports.sendResponseFinallyMapping = sendResponseFinallyMapping;
exports.statusErrorMapping = statusErrorMapping;
exports.getHandler = getHandler;

var _log = require('./utils/log.js');

var _promise = require('./promise.js');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = new (_get__('Logger'))('nicosommi.tPipeExpress');

function requestInputMapping(input, req) {
  _get__('logger').log('tpipe-express input mapping begin');
  input.parameters = {
    path: req.params,
    query: req.query,
    headers: req.headers,
    session: req.session,
    user: req.user,
    cookies: req.cookies,
    req: req // FIXME: remove this when tpipe is mature
  };

  input.body = req.body;
  return _get__('Promise').resolve(input);
}

function sendResponseFinallyMapping(output, input, req, res, next) {
  _get__('logger').log('tpipe-express finally mapping begin', { input: input, output: output });
  res.status(output.parameters.status || 200).send(output.body);
  return _get__('Promise').resolve(output);
}

function statusErrorMapping(errorOutput) {
  _get__('logger').log('tpipe-express error mapping begin');
  if (!errorOutput.parameters.status) {
    errorOutput.parameters.status = 500;
  }
  return _get__('Promise').resolve(errorOutput);
}

function getHandler() {
  return this.open.bind(this);
}

var defaultSet = {
  inputMappings: [_get__('requestInputMapping')],
  errorMappings: [_get__('statusErrorMapping')],
  finallyMappings: [_get__('sendResponseFinallyMapping')],
  extraProperties: {
    getHandler: _get__('getHandler')
  }
};

exports.default = _get__('defaultSet');

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
      return _log.Logger;

    case 'logger':
      return logger;

    case 'Promise':
      return _promise2.default;

    case 'requestInputMapping':
      return requestInputMapping;

    case 'statusErrorMapping':
      return statusErrorMapping;

    case 'sendResponseFinallyMapping':
      return sendResponseFinallyMapping;

    case 'getHandler':
      return getHandler;

    case 'defaultSet':
      return defaultSet;
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

var _typeOfOriginalExport = typeof defaultSet === 'undefined' ? 'undefined' : _typeof(defaultSet);

function addNonEnumerableProperty(name, value) {
  Object.defineProperty(defaultSet, name, {
    value: value,
    enumerable: false,
    configurable: true
  });
}

if ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(defaultSet)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9saWIvbWFwcGVycy5qcyJdLCJuYW1lcyI6WyJyZXF1ZXN0SW5wdXRNYXBwaW5nIiwic2VuZFJlc3BvbnNlRmluYWxseU1hcHBpbmciLCJzdGF0dXNFcnJvck1hcHBpbmciLCJnZXRIYW5kbGVyIiwibG9nZ2VyIiwiaW5wdXQiLCJyZXEiLCJsb2ciLCJwYXJhbWV0ZXJzIiwicGF0aCIsInBhcmFtcyIsInF1ZXJ5IiwiaGVhZGVycyIsInNlc3Npb24iLCJ1c2VyIiwiY29va2llcyIsImJvZHkiLCJyZXNvbHZlIiwib3V0cHV0IiwicmVzIiwibmV4dCIsInN0YXR1cyIsInNlbmQiLCJlcnJvck91dHB1dCIsIm9wZW4iLCJiaW5kIiwiZGVmYXVsdFNldCIsImlucHV0TWFwcGluZ3MiLCJlcnJvck1hcHBpbmdzIiwiZmluYWxseU1hcHBpbmdzIiwiZXh0cmFQcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7UUFLZ0JBLG1CLEdBQUFBLG1CO1FBZ0JBQywwQixHQUFBQSwwQjtRQU1BQyxrQixHQUFBQSxrQjtRQVFBQyxVLEdBQUFBLFU7O0FBbkNoQjs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsU0FBUyx1QkFBVyx3QkFBWCxDQUFmOztBQUVPLFNBQVNKLG1CQUFULENBQThCSyxLQUE5QixFQUFxQ0MsR0FBckMsRUFBMEM7QUFDL0MsbUJBQU9DLEdBQVAsQ0FBVyxtQ0FBWDtBQUNBRixRQUFNRyxVQUFOLEdBQW1CO0FBQ2pCQyxVQUFNSCxJQUFJSSxNQURPO0FBRWpCQyxXQUFPTCxJQUFJSyxLQUZNO0FBR2pCQyxhQUFTTixJQUFJTSxPQUhJO0FBSWpCQyxhQUFTUCxJQUFJTyxPQUpJO0FBS2pCQyxVQUFNUixJQUFJUSxJQUxPO0FBTWpCQyxhQUFTVCxJQUFJUyxPQU5JO0FBT2pCVCxTQUFLQSxHQVBZLENBT1I7QUFQUSxHQUFuQjs7QUFVQUQsUUFBTVcsSUFBTixHQUFhVixJQUFJVSxJQUFqQjtBQUNBLFNBQU8sa0JBQVFDLE9BQVIsQ0FBZ0JaLEtBQWhCLENBQVA7QUFDRDs7QUFFTSxTQUFTSiwwQkFBVCxDQUFxQ2lCLE1BQXJDLEVBQTZDYixLQUE3QyxFQUFvREMsR0FBcEQsRUFBeURhLEdBQXpELEVBQThEQyxJQUE5RCxFQUFvRTtBQUN6RSxtQkFBT2IsR0FBUCxDQUFXLHFDQUFYLEVBQWtELEVBQUNGLFlBQUQsRUFBUWEsY0FBUixFQUFsRDtBQUNBQyxNQUFJRSxNQUFKLENBQVdILE9BQU9WLFVBQVAsQ0FBa0JhLE1BQWxCLElBQTRCLEdBQXZDLEVBQTRDQyxJQUE1QyxDQUFpREosT0FBT0YsSUFBeEQ7QUFDQSxTQUFPLGtCQUFRQyxPQUFSLENBQWdCQyxNQUFoQixDQUFQO0FBQ0Q7O0FBRU0sU0FBU2hCLGtCQUFULENBQTZCcUIsV0FBN0IsRUFBMEM7QUFDL0MsbUJBQU9oQixHQUFQLENBQVcsbUNBQVg7QUFDQSxNQUFJLENBQUNnQixZQUFZZixVQUFaLENBQXVCYSxNQUE1QixFQUFvQztBQUNsQ0UsZ0JBQVlmLFVBQVosQ0FBdUJhLE1BQXZCLEdBQWdDLEdBQWhDO0FBQ0Q7QUFDRCxTQUFPLGtCQUFRSixPQUFSLENBQWdCTSxXQUFoQixDQUFQO0FBQ0Q7O0FBRU0sU0FBU3BCLFVBQVQsR0FBdUI7QUFDNUIsU0FBTyxLQUFLcUIsSUFBTCxDQUFVQyxJQUFWLENBQWUsSUFBZixDQUFQO0FBQ0Q7O0FBRUQsSUFBTUMsYUFBYTtBQUNqQkMsaUJBQWUsK0JBREU7QUFFakJDLGlCQUFlLDhCQUZFO0FBR2pCQyxtQkFBaUIsc0NBSEE7QUFJakJDLG1CQUFpQjtBQUNmM0I7QUFEZTtBQUpBLENBQW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBU2V1QixVLHlDQUFBQSxVOzs7d0JBQUFBLFU7Ozs7Ozs7d0dBQUFBLFUiLCJmaWxlIjoibWFwcGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vdXRpbHMvbG9nLmpzJ1xuaW1wb3J0IFByb21pc2UgZnJvbSAnLi9wcm9taXNlLmpzJ1xuXG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCduaWNvc29tbWkudFBpcGVFeHByZXNzJylcblxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVlc3RJbnB1dE1hcHBpbmcgKGlucHV0LCByZXEpIHtcbiAgbG9nZ2VyLmxvZygndHBpcGUtZXhwcmVzcyBpbnB1dCBtYXBwaW5nIGJlZ2luJylcbiAgaW5wdXQucGFyYW1ldGVycyA9IHtcbiAgICBwYXRoOiByZXEucGFyYW1zLFxuICAgIHF1ZXJ5OiByZXEucXVlcnksXG4gICAgaGVhZGVyczogcmVxLmhlYWRlcnMsXG4gICAgc2Vzc2lvbjogcmVxLnNlc3Npb24sXG4gICAgdXNlcjogcmVxLnVzZXIsXG4gICAgY29va2llczogcmVxLmNvb2tpZXMsXG4gICAgcmVxOiByZXEgLy8gRklYTUU6IHJlbW92ZSB0aGlzIHdoZW4gdHBpcGUgaXMgbWF0dXJlXG4gIH1cblxuICBpbnB1dC5ib2R5ID0gcmVxLmJvZHlcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpbnB1dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRSZXNwb25zZUZpbmFsbHlNYXBwaW5nIChvdXRwdXQsIGlucHV0LCByZXEsIHJlcywgbmV4dCkge1xuICBsb2dnZXIubG9nKCd0cGlwZS1leHByZXNzIGZpbmFsbHkgbWFwcGluZyBiZWdpbicsIHtpbnB1dCwgb3V0cHV0fSlcbiAgcmVzLnN0YXR1cyhvdXRwdXQucGFyYW1ldGVycy5zdGF0dXMgfHwgMjAwKS5zZW5kKG91dHB1dC5ib2R5KVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG91dHB1dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXR1c0Vycm9yTWFwcGluZyAoZXJyb3JPdXRwdXQpIHtcbiAgbG9nZ2VyLmxvZygndHBpcGUtZXhwcmVzcyBlcnJvciBtYXBwaW5nIGJlZ2luJylcbiAgaWYgKCFlcnJvck91dHB1dC5wYXJhbWV0ZXJzLnN0YXR1cykge1xuICAgIGVycm9yT3V0cHV0LnBhcmFtZXRlcnMuc3RhdHVzID0gNTAwXG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlcnJvck91dHB1dClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhhbmRsZXIgKCkge1xuICByZXR1cm4gdGhpcy5vcGVuLmJpbmQodGhpcylcbn1cblxuY29uc3QgZGVmYXVsdFNldCA9IHtcbiAgaW5wdXRNYXBwaW5nczogW3JlcXVlc3RJbnB1dE1hcHBpbmddLFxuICBlcnJvck1hcHBpbmdzOiBbc3RhdHVzRXJyb3JNYXBwaW5nXSxcbiAgZmluYWxseU1hcHBpbmdzOiBbc2VuZFJlc3BvbnNlRmluYWxseU1hcHBpbmddLFxuICBleHRyYVByb3BlcnRpZXM6IHtcbiAgICBnZXRIYW5kbGVyXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFNldFxuIl19