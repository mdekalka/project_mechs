import { combineReducers } from 'redux';

// import pilotsReducer from '../re-ducks/';
// import filterReducer from '../components/FilterInputWithType/reducers';
import * as reducers from '../re-ducks';

const rootReducer = combineReducers({
  pilotsInfo: reducers.pilotsState,
  filterInfo: reducers.inputFiltersState
});

export default rootReducer;