import { combineReducers } from 'redux';
import { routerReducer as router, RouterState} from 'react-router-redux';
import { reducer as fetchReducer } from '../fetch/reducer';

export const rootReducer = combineReducers({  
  router,
  server: fetchReducer
});