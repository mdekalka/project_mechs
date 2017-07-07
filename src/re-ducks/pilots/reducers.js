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

    case types.UPDATE_PILOT_INFO:
      return { 
        ...state,
        pilots: state.pilots.map(pilot => {
          if (pilot.id === action.info.id) {
            return { ...pilot, ...action.info }
          } else {
            return pilot;
          }
        })}

    case types.REMOVE_PILOT:
      return {
        ...state,
        pilots: state.pilots.filter(pilot => pilot.id !== action.id)
      }

    default:
      return state;
  }
};

export default pilotsReducer;
