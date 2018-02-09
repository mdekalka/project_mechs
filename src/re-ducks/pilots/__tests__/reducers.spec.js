import reducer, { pilotsTypes as types, pilotsActions as actions } from '../'

const initialState = {
  pilots: {
    ids: [],
    byId: {}
  },
  activeID: null,
  isFetching: false,
  isError: ''
}

describe('testing pilots reducer', () => {
  test('should return the initil state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  })

  test('should handle LOAD_PILOTS_SUCCESS', () => {
    const data = {
      ids: [1, 2, 3],
      byId: {
        1: {},
        2: {},
        3: {}
      }
    }

    expect(
      reducer(undefined, {
        type: types.LOAD_PILOTS_SUCCESS,
        data
      })
    ).toEqual(
      {
        ...initialState,
        pilots: data
      }
    );
  })

  test('should handle SET_ACTIVE_ID', () => {
    const id = '1';

    expect(
      reducer(undefined, {
        type: types.SET_ACTIVE_ID,
        id
      })
    ).toEqual(
      {
        ...initialState,
        activeID: id
      }
    )
  })

  test('should handle UPDATE_PILOT_INFO', () => {
    const info = {
      id: 1,
      name: 'Test name',
      type: 'Test type'
    };

    expect(
      reducer(undefined, {
        type: types.UPDATE_PILOT_INFO,
        info
      })
    ).toEqual(
      {
        ...initialState,
      }
    )
  })

  test('should handle REMOVE_PILOT', () => {
    const id = '1'

    expect(
      reducer(undefined, {
        type: types.REMOVE_PILOT,
        id
      })
    ).toEqual(
      {
        filter: 'name',
        query: '',
        itemsCount: 10,
        activePage: page
      }
    )
  })
});