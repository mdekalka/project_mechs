import types from './types';

import pilotsMocks from './mocks';
import normalizePilots from './schema';

const loadPilotsSuccess = (data) => {
  return {
    type: types.LOAD_PILOTS_SUCCESS,
    data
  }
};

const setActiveId = (id) => {
  return {
    type: types.SET_ACTIVE_ID,
    id
  }
};

const updatePilotInfo = (info) => {
  return {
    type: types.UPDATE_PILOT_INFO,
    info
  }
};

const removePilot = (id) => {
  return {
    type: types.REMOVE_PILOT,
    id
  }
};

const loadPilots = () => (dispatch, getState) => {
  return Promise.resolve(pilotsMocks.getPilots())
    .then(data => {
      const normalizeData = normalizePilots(data);

      dispatch(loadPilotsSuccess(normalizeData))
    })
}

export default {
  loadPilotsSuccess,
  setActiveId,
  updatePilotInfo,
  removePilot,
  loadPilots
};
