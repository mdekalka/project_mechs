import { combineReducers } from 'redux';

import * as reducers from '../re-ducks';

const rootReducer = combineReducers({
  pilotsInfo: reducers.pilotsState,
  filterInfo: reducers.inputFiltersState
});

export default rootReducer;