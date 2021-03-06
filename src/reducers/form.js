import { FORM_REQUEST, FORM_SUCCESS, FORM_FAILURE } from '../actions';

export default (name, src) => {
  return (state = {
    src: src,
    name: name,
    id: '',
    isFetching: false,
    lastUpdated: 0,
    form: {},
    error: ''
  }, action) => {
    // Only proceed for this form.
    if (action.name !== state.name) {
      return state;
    }
    switch (action.type) {
      case FORM_REQUEST:
        return {
          ...state,
          isFetching: true,
          id: action.id,
          error: ''
        };
      case FORM_SUCCESS:
        return {
          ...state,
          id: action.form._id,
          form: action.form,
          isFetching: false,
          error: ''
        };
      case FORM_FAILURE:
        return {
          ...state,
          isFetching: false,
          isInvalid: true,
          error: action.error
        };
      default:
        return state;
    }
  };
};
