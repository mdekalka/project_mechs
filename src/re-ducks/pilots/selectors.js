import { createSelector } from 'reselect';

import { filterBy, sliceBy } from './service';

const getPilotList = state => state.pilotsInfo.pilots;

const getActiveId = state => state.pilotsInfo.activeID;

const getFilter = state => state.filterInfo.filter;

const getQuery = state => state.filterInfo.query;

const getPaginationInfo = state => state.filterInfo;

const selectPilotList = createSelector([getPilotList, getFilter, getQuery], (pilotList, filter, query) => {
  return filterBy(pilotList, filter, query);
});

const selectPilotsSliced = createSelector([selectPilotList, getPaginationInfo], (pilotList, pageInfo) => {
  const startIndex = pageInfo.itemsCount * (pageInfo.activePage - 1);
  const endIndex = startIndex + pageInfo.itemsCount;

  if (endIndex - startIndex >= pilotList.length) {
    return pilotList;
  } else {
    return sliceBy(pilotList, startIndex, endIndex);
  }
});

const selectPageCount = createSelector([selectPilotList, getPaginationInfo], (pilotList, pageInfo) => {
  return Math.ceil(pilotList.length / pageInfo.itemsCount);
});

const selectPilotById = createSelector([getPilotList, getActiveId], (pilotList, activeId) => {
  return pilotList.find(pilot => pilot.id === activeId);
});

export default {
  getPilotList,
  getActiveId,
  getFilter,
  getQuery,
  getPaginationInfo,
  selectPilotList,
  selectPilotsSliced,
  selectPageCount,
  selectPilotById
};
