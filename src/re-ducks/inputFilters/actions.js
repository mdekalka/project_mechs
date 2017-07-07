import types from './types';

const setFilterType = (filter) => {
  return {
    type: types.SET_FILTER_TYPE,
    filter
  }
};

const updateSearchQuery = (query) => {
  return {
    type: types.UPDATE_SEARCH_QUERY,
    query
  }
};

const setItemsCount = (count) => {
  return {
    type: types.SET_ITEMS_COUNT,
    count
  }
};

const setCurrentPage = (page) => {
  return {
    type: types.SET_CURRENT_PAGE,
    page
  }
};

export default {
  setFilterType,
  updateSearchQuery,
  setItemsCount,
  setCurrentPage
};
