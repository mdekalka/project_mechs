import types from './types';

import { pilotsConstants } from '../pilots';
import { FILTER_TYPES } from '../../constants/constants';

const initialState = {
  filter: FILTER_TYPES[0].value,
  query: '',
  itemsCount: pilotsConstants.ITEMS_COUNT[0].value,
  activePage: 1
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FILTER_TYPE:
      return { ...state, filter: action.filter };

    case types.UPDATE_SEARCH_QUERY:
      return { ...state, query: action.query };

    case types.SET_ITEMS_COUNT:
      return { ...state, itemsCount: action.count };

    case types.SET_CURRENT_PAGE:
      return { ...state, activePage: action.page };

    default:
      return state;
  }
};

export default filterReducer;