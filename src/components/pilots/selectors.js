import { createSelector } from 'reselect';

import { filterBy } from './service';

export const getPilotList = (state) => state.pilotsInfo.pilots;

export const getActiveId = (state) => state.pilotsInfo.activeID;

export const getFilter = (state) => state.filterInfo.filter;

export const getQuery = (state) => state.filterInfo.query;

export const selectFilteredPilotList = createSelector([getPilotList, getFilter, getQuery], (pilotList, filter, query) => {
  return filterBy(pilotList, filter, query);
});

export const selectPilotById = createSelector([getPilotList, getActiveId], (pilotList, activeId) => {
  return pilotList.find(pilot => pilot.id === activeId);
});
