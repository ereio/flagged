import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import gameReducer from './game/reducer';
import countriesReducer from './countries/reducer';

const reducers = combineReducers({
  game: gameReducer,
  countries: countriesReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export { store };
