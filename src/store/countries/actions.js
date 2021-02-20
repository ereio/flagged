import { apolloClient } from "../../services/countries/client";
import { QUERY_COUNTRIES } from '../../services/countries/queries';

export const FETCH_COUNTRIES_START = 'FETCH_COUNTRIES_START';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';
export const RESET_COUNTRIES = 'RESET_COUNTRIES';

// imitates middleware through redux_thunk 
export const fetchCountries = () => async (dispatch, getState) => {
  try {
    dispatch({ type: FETCH_COUNTRIES_START });

    const response = await apolloClient.query({
      query: QUERY_COUNTRIES,
    });

    if (response.error != null) {
      throw response.error
    }

    if (response.errors != null) {
      throw response.errors[0]
    }

    const { countries } = response.data

    dispatch({ type: FETCH_COUNTRIES_SUCCESS, countries: countries });
  } catch (error) {
    // TODO: dispatch alerts
    console.error(error);

    dispatch({ type: FETCH_COUNTRIES_FAILURE });
  }
};

export const resetCountries = () => (dispatch, getState) => {
  dispatch({ type: RESET_COUNTRIES });
};