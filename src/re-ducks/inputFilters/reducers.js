import types from './types';

import { pilotsConstants } from '../pilots';

const START_PAGE = 1;

const initialState = {
  filter: 'name',
  query: '',
  itemsCount: pilotsConstants.ITEMS_COUNT[0].value,
  activePage: START_PAGE
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER_TYPE:
      return { ...state, filter: action.filter };

    case types.UPDATE_SEARCH_QUERY:
      return { ...state, activePage: START_PAGE, query: action.query };

    case types.SET_ITEMS_COUNT:
      return { ...state, activePage: START_PAGE, itemsCount: action.count };

    case types.SET_CURRENT_PAGE:
      return { ...state, activePage: action.page };

    default:
      return state;
  }
};

export default filterReducer;