import types from './types';
import { ITEMS_COUNT } from '../pilots/constants';

const START_PAGE = 1;

const initialState = {
  itemsCount: ITEMS_COUNT[0].value,
  activePage: START_PAGE
};

const pilotPaginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ITEMS_COUNT:
      return { activePage: START_PAGE, itemsCount: action.count };

    case types.SET_CURRENT_PAGE:
      return { ...state, activePage: action.page };

    default:
      return state;
  }
};

export default pilotPaginationReducer;