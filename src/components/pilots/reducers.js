import types from './types';

const initialState = {
  pilots: [],
  activeID: null,
  isFetching: false,
  isError: ''
};

const pilotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PILOTS_SUCCESS:
      return { ...state, pilots: action.data, isFetching: false, isError: '' };

    case types.SET_ACTIVE_ID:
      return { ...state, activeID: action.id };

    default:
      return state;
  }
};

export default pilotsReducer;
