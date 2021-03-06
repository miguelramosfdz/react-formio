'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = require('../actions');

exports.default = function (name, src) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      src: src,
      name: name,
      id: '',
      isFetching: false,
      lastUpdated: 0,
      form: {},
      error: ''
    };
    var action = arguments[1];

    // Only proceed for this form.
    if (action.name !== state.name) {
      return state;
    }
    switch (action.type) {
      case _actions.FORM_REQUEST:
        return _extends({}, state, {
          isFetching: true,
          id: action.id,
          error: ''
        });
      case _actions.FORM_SUCCESS:
        return _extends({}, state, {
          id: action.form._id,
          form: action.form,
          isFetching: false,
          error: ''
        });
      case _actions.FORM_FAILURE:
        return _extends({}, state, {
          isFetching: false,
          isInvalid: true,
          error: action.error
        });
      default:
        return state;
    }
  };
};