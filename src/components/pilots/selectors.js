import { createSelector } from 'reselect';

const getPilotList = (state) => state.pilotsInfo.pilots;

const getActiveId = (state) => state.pilotsInfo.activeID;

export const selectPilotList = createSelector(getPilotList, (pilotList) => pilotList);

export const selectPilotById = createSelector([getPilotList, getActiveId], (pilotList, activeId) => {
  return pilotList.find(pilot => pilot.id === activeId);
});