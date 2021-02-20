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
      const newStreak = state.streak + 1;
      return {
        ...state,
        best: newStreak > state.best ? newStreak : state.best,
        streak: newStreak
      }
    }
    case RESET_STREAK: {
      return {
        ...state,
        streak: 0,
      }
    }
    case RESET_GAME:
      return {
        ...initialState(),
        best: state.best
      }
    default:
      return state;
  }
}
