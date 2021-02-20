import {
  FETCH_COUNTRIES_START,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  RESET_COUNTRIES,
} from './actions';
import initialState from './state';

export default function countriesReducer(state = initialState(), action) {
  switch (action.type) {
    case FETCH_COUNTRIES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.countries,
        loading: false,
      };
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        countries: [],
        loading: false,
      };
    case RESET_COUNTRIES:
      return initialState();
    default:
      return state;
  }
}
