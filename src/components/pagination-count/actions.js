import types from './types';

export const setItemsCount = (count) => {
  return {
    type: types.SET_ITEMS_COUNT,
    count
  }
};

export const setCurrentPage = (page) => {
  return {
    type: types.SET_CURRENT_PAGE,
    page
  }
};
