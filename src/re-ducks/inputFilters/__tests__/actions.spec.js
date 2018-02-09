import { inputFilterTypes as types, inputFiltersActions as actions } from '../'

describe('testing input filters actions', () => {
  test('should create an action to set filter', () => {
    const filter = 'Test filter';
    const expectedAction = {
      type: types.SET_FILTER_TYPE,
      filter
    }

    expect(actions.setFilterType(filter)).toEqual(expectedAction)
  })

  test('should create an action to set query search', () => {
    const query = 'Test query';
    const expectedAction = {
      type: types.UPDATE_SEARCH_QUERY,
      query
    }

    expect(actions.updateSearchQuery(query)).toEqual(expectedAction)
  })

  test('should create an action to set item count', () => {
    const count = 10;
    const expectedAction = {
      type: types.SET_ITEMS_COUNT,
      count
    }

    expect(actions.setItemsCount(count)).toEqual(expectedAction)
  })

  test('should create an action to set current page', () => {
    const page = 1;
    const expectedAction = {
      type: types.SET_CURRENT_PAGE,
      page
    }

    expect(actions.setCurrentPage(page)).toEqual(expectedAction)
  })
});
