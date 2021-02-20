import { OPTION_AMOUNT } from "../../global/values";

export const SET_SUBMITTED = 'SET_SUBMITTED';
export const GENERATE_ROUND = 'GENERATE_ROUND';
export const INCREMENT_STREAK = 'INCREMENT_STREAK';

export const RESET_GAME = 'RESET_GAME';
export const RESET_STREAK = 'RESET_STREAK';

export const generateRound = () => (dispatch, getState) => {
  const { countries } = getState().countries;

  let options = [];

  for (let i = 0; i < OPTION_AMOUNT; i++) {
    const optionIndex = Math.floor(Math.random() * countries.length);
    options.push(countries[optionIndex])
  }

  const answerIndex = Math.floor(Math.random() * options.length);
  const answer = options[answerIndex];

  dispatch({ type: GENERATE_ROUND, answer: answer, options: options })
}

export const submitAnswer = (guess) => (dispatch, getState) => {
  dispatch({ type: SET_SUBMITTED })
  const { answer: { name } } = getState().game;

  if (name == guess) {
    dispatch({ type: INCREMENT_STREAK })
  } else {
    dispatch({ type: RESET_STREAK })
  }
};

export const resetGame = () => (dispatch, getState) => {
  dispatch({ type: RESET_GAME });
};