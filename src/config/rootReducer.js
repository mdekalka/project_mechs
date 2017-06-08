import { combineReducers } from 'redux';
import { combineForms } from 'react-redux-form';

import unitInfoReducer from '../components/UnitInfo/reducers';
import pilotsReducer from '../components/pilots/reducers';

const rootReducer = combineReducers({
  unitInfo: unitInfoReducer,
  pilotsInfo: pilotsReducer
});

export default rootReducer;