import types from './types';

export const setFilterType = (filter) => {
  return {
    type: types.SET_FILTER_TYPE,
    filter
  }
};

export const updateSearchQuery = (query) => {
  return {
    type: types.UPDATE_SEARCH_QUERY,
    query
  }
};
