import { combineReducers } from 'redux';

import root from './rootReducer';
import roomListReducer from './roomListReducer';

const rootReducer = combineReducers({
  root,
  roomListReducer
});

export default rootReducer;

