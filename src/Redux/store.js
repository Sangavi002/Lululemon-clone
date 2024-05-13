import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import {logger} from 'redux-logger';
import { womenDressReducer } from './reducer/womenDressReducer';
import { menDressReducer } from './reducer/menDressReducer';

const rootReducer = combineReducers({
    women: womenDressReducer,
    men: menDressReducer
  });

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk, logger));