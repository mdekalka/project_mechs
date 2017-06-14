import { combineReducers } from 'redux';

import pilotsReducer from '../components/pilots/reducers';
import filterReducer from '../components/FilterInputWithType/reducers';
import pilotPaginationReducer from '../components/pagination-count/reducers';

const rootReducer = combineReducers({
  pilotsInfo: pilotsReducer,
  filterInfo: filterReducer,
  paginationInfo: pilotPaginationReducer
});

export default rootReducer;