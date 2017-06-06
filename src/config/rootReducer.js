import { combineReducers } from 'redux';

import unitInfoReducer from '../components/UnitInfo/reducers';
import pilotsReducer from '../components/pilots/reducers';

const rootReducer = combineReducers({
  unitInfo: unitInfoReducer,
  pilotsInfo: pilotsReducer
});

export default rootReducer;