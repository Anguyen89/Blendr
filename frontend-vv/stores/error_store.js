var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ErrorConstants = require('../constants/error_constants');

var ErrorStore = new Store(AppDispatcher);

var _errors = {};
var _form = "";

function setErrors(payload){
  _errors = payload.errors;
  _form = payload.form;
  ErrorStore.__emitChange();
}

function clearErrors(){
  _errors = {};
  _form = "";
  ErrorStore.__emitChange();
}

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      setErrors(payload);
      break;
    case ErrorConstants.CLEAR_ERRORS:
      clearErrors();
      break;
  }
};

ErrorStore.formErrors = function (form) {
  if (form !== _form) {
    return {};
  }

  // copies the _errors object into a new object
  var result = {};
  for (var field in _errors) {
    result[field] = Array.from(_errors[field]);
  }

  return result;
};

ErrorStore.form = function() {
  return _form;
};

module.exports = ErrorStore;
