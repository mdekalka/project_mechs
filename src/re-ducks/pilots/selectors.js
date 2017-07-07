import { createSelector } from 'reselect';

import { filterBy, sliceBy } from './service';

const getPilots = state => state.pilotsInfo.pilots;

const getActiveId = state => state.pilotsInfo.activeID;

const getFilter = state => state.filterInfo.filter;

const getQuery = state => state.filterInfo.query;

const getPaginationInfo = state => state.filterInfo;

const getPilotsById = (ids, pilots) => {
  return ids.map(id => pilots[id]);
};

const selectPilots = createSelector([getPilots, getFilter, getQuery], (pilots, filter, query) => {
  const filteredIds = filterBy(pilots.byId, filter, query);

  return {
    filteredIds,
    byId: pilots.byId
  };
});

const selectPilotsSliced = createSelector([selectPilots, getPaginationInfo], (pilots, pageInfo) => {
  const startIndex = pageInfo.itemsCount * (pageInfo.activePage - 1);
  const endIndex = startIndex + pageInfo.itemsCount;

  const pilotList = getPilotsById(pilots.filteredIds, pilots.byId);

  if (endIndex - startIndex >= pilotList.length) {
    return pilotList;
  } else {
    return sliceBy(pilotList, startIndex, endIndex);
  }
});

const selectPageCount = createSelector([selectPilots, getPaginationInfo], (pilots, pageInfo) => {
  return Math.ceil(pilots.filteredIds.length / pageInfo.itemsCount);
});

const selectPilotById = createSelector([getPilots, getActiveId], (pilots, activeId) => {
  if (!activeId) {
    return null;
  }

  return pilots.byId[activeId];
});

export default {
  getPilots,
  getActiveId,
  getFilter,
  getQuery,
  getPaginationInfo,
  selectPilotsSliced,
  selectPageCount,
  selectPilotById
};
