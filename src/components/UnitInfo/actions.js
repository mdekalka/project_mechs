import types from './types';

const initData = {
  name: 'Black Window Company',
  affiliation: [
    { value : 'lc', text : 'Lyran Commonwealth'},
    { value : 'wd', text : 'Wolf\'s Dragoons'}
  ]
}

export const loadUnitDataSuccess = (data) => {
  return {
    type: types.LOAD_UNIT_SUCCESS,
    data
  }
};

export const loadUnitInfo = () => (dispatch, getState) => {
  return Promise.resolve(initData)
    .then(data => dispatch(loadUnitDataSuccess(data)))
};