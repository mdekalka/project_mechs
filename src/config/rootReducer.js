import { combineReducers } from 'redux';

import pilotsReducer from '../components/pilots/reducers';
import filterReducer from '../components/FilterInputWithType/reducers';

const rootReducer = combineReducers({
  pilotsInfo: pilotsReducer,
  filterInfo: filterReducer
});

export default rootReducer;