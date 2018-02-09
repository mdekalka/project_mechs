import reducer, { inputFilterTypes as types, inputFiltersActions as actions } from '../'

const initialState = {
  filter: 'name',
  query: '',
  itemsCount: 10,
  activePage: 1
}

describe('testing input filters reducer', () => {
  test('should return the initil state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  })

  test('should handle SET_FILTER_TYPE', () => {
    const filter = 'Test filter'

    expect(
      reducer(undefined, {
        type: types.SET_FILTER_TYPE,
        filter
      })
    ).toEqual(
      {
        ...initialState,
        filter
      }
    );
  })

  test('should handle UPDATE_SEARCH_QUERY', () => {
    const query = 'Test query';

    expect(
      reducer(undefined, {
        type: types.UPDATE_SEARCH_QUERY,
        query
      })
    ).toEqual(
      {
        ...initialState,
        query
      }
    )
  })

  test('should handle SET_ITEMS_COUNT', () => {
    const count = 10;

    expect(
      reducer(undefined, {
        type: types.SET_ITEMS_COUNT,
        count
      })
    ).toEqual(
      {
        ...initialState,
        itemsCount: count
      }
    )
  })

  test('should handle SET_CURRENT_PAGE', () => {
    const page = 2;

    expect(
      reducer(undefined, {
        type: types.SET_CURRENT_PAGE,
        page
      })
    ).toEqual(
      {
        ...initialState,
        activePage: page
      }
    )
  })
});
