"use strict";

var AppDispatcher = require('../dispatcher/dispatcher');
var ErrorConstants = require('../constants/error_constants');

var ErrorActions = {
  setErrors(form, errors) {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      form: form,
      errors: errors
    });
  },

  clearErrors() {
    AppDispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS
    });
  }
};

module.exports = ErrorActions;
