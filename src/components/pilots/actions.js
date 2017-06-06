import types from './types';

import { pilots } from './mocks';

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

export const loadPilots = () => (dispatch, getState) => {
  return Promise.resolve(pilots)
    .then(data => dispatch(loadPilotsSuccess(data)))
}
