import {
  GENERATE_ROUND,
  INCREMENT_STREAK,
  RESET_GAME,
  RESET_STREAK,
  SET_SUBMITTED,
} from './actions';
import initialState from './state';

export default function gameReducer(state = initialState(), action) {
  switch (action.type) {
    case SET_SUBMITTED: {
      return {
        ...state,
        submitted: true,
      }
    }
    case GENERATE_ROUND: {
      return {
        ...state,
        answer: action.answer,
        options: action.options,
        submitted: false,
      }
    }
    case INCREMENT_STREAK: {
      return {
        ...state,
        best: state.streak > state.best ? state.streak : state.best,
        streak: state.streak + 1
      }
    }
    case RESET_STREAK: {
      return {
        ...state,
        streak: 0,
      }
    }
    case RESET_GAME:
      return initialState();
    default:
      return state;
  }
}
