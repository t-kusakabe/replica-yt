import {
  createStore as reduxCreateStore,
  combineReducers
} from 'redux';
import TopReducer from './modules/top';

const createStore = () => {
  return reduxCreateStore(
    combineReducers({
      top: TopReducer
    })
  );
};

export default createStore;
