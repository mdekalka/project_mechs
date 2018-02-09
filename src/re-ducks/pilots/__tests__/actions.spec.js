import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { pilotsTypes as types, pilotsActions as actions } from '../'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('testing pilots actions', () => {
  test('should create an action to set pilots data', () => {
    const data = [{ id: 1, name: 'Test name', data: {} }];
    const expectedAction = {
      type: types.LOAD_PILOTS_SUCCESS,
      data
    }

    expect(actions.loadPilotsSuccess(data)).toEqual(expectedAction)
  })

  test('should create an action to set active id', () => {
    const id = '1';
    const expectedAction = {
      type: types.SET_ACTIVE_ID,
      id
    }

    expect(actions.setActiveId(id)).toEqual(expectedAction)
  })

  test('should create an action to set updated pilot info', () => {
    const info = [{ id: 1, name: 'Test name', data: {} }];
    const expectedAction = {
      type: types.UPDATE_PILOT_INFO,
      info
    }

    expect(actions.updatePilotInfo(info)).toEqual(expectedAction)
  })

  test('should create an action to set remove id', () => {
    const id = '1';
    const expectedAction = {
      type: types.REMOVE_PILOT,
      id
    }

    expect(actions.removePilot(id)).toEqual(expectedAction)
  })
});
