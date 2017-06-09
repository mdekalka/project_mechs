import types from './types';

const initialState = {
  filter: 'name',
  query: ''
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER_TYPE:
      return { ...state, filter: action.filter };

    case types.UPDATE_SEARCH_QUERY:
      return { ...state, query: action.query };


    default:
      return state;
  }
};

export default filterReducer;
