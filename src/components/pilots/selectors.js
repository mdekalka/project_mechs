import { createSelector } from 'reselect';

import { filterBy, sliceBy } from './service';

export const getPilotList = state => state.pilotsInfo.pilots;

export const getActiveId = state => state.pilotsInfo.activeID;

export const getFilter = state => state.filterInfo.filter;

export const getQuery = state => state.filterInfo.query;

export const getPaginationInfo = state => state.paginationInfo;

export const selectPilotList = createSelector([getPilotList, getFilter, getQuery, getPaginationInfo], (pilotList, filter, query, pageInfo) => {
  const startIndex = pageInfo.itemsCount * (pageInfo.activePage - 1);
  const endIndex = startIndex + pageInfo.itemsCount;

  return sliceBy(filterBy(pilotList, filter, query), startIndex, endIndex);
});

export const selectPilotById = createSelector([getPilotList, getActiveId], (pilotList, activeId) => {
  return pilotList.find(pilot => pilot.id === activeId);
});

export const selectPageCount = createSelector([getPilotList, getPaginationInfo], (pilotList, pageInfo) => {
  return Math.ceil(pilotList.length / pageInfo.itemsCount);
});
