import types from './types';

const initialState = {
  name: '',
  affiliation: []
};

const unitInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_UNIT_SUCCESS:
      return action.data;

    default:
      return state;
  }
};

export default unitInfoReducer;