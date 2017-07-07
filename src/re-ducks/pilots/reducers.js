import types from './types';

const initialState = {
  pilots: {
    ids: [],
    byId: {}
  },
  activeID: null,
  isFetching: false,
  isError: ''
};

const pilotReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_PILOTS_SUCCESS:
      return { ids: action.data.result, byId: action.data.entities.pilots };

    case types.UPDATE_PILOT_INFO:
      return { ...state, byId: { ...state.byId, [action.info.id]: { ...state.byId[action.info.id], ...action.info } } } 

    case types.REMOVE_PILOT:
      // TODO: Is better way exists to do this?
      let byIdCopy = { ...state.byId };
      delete byIdCopy[action.id];

      return { ids: state.ids.filter(id => id !== action.id), byId: byIdCopy };

    
    default:
      return state;
  }
};

const pilotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_PILOTS_SUCCESS:
      return { ...state, pilots: pilotReducer(state.pilots, action), isFetching: false, isError: '' };

    case types.SET_ACTIVE_ID:
      return { ...state, activeID: action.id };

    case types.UPDATE_PILOT_INFO:
      return { ...state, pilots: pilotReducer(state.pilots, action) }

    case types.REMOVE_PILOT:
      return { ...state, pilots: pilotReducer(state.pilots, action) }

    default:
      return state;
  }
};

export default pilotsReducer;
