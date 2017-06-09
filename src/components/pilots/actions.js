import types from './types';

import { getPilots } from './mocks';

export const loadPilotsSuccess = (data) => {
  return {
    type: types.LOAD_PILOTS_SUCCESS,
    data
  }
};

export const setActiveId = (id) => {
  return {
    type: types.SET_ACTIVE_ID,
    id
  }
};

export const updatePilotInfo = (info) => {
  return {
    type: types.UPDATE_PILOT_INFO,
    info
  }
};

export const removePilot = (id) => {
  return {
    type: types.REMOVE_PILOT,
    id
  }
};

export const loadPilots = () => (dispatch, getState) => {
  return Promise.resolve(getPilots())
    .then(data => dispatch(loadPilotsSuccess(data)))
}
