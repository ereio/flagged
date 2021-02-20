
export const SET_SUBMITTED = 'SET_SUBMITTED';
export const GENERATE_ROUND = 'GENERATE_ROUND';
export const INCREMENT_STREAK = 'INCREMENT_STREAK';

export const RESET_GAME = 'RESET_GAME';
export const RESET_STREAK = 'RESET_STREAK';

export const generateRound = () => (dispatch, getState) => {
  const { countries } = getState().countries;

  const options = [{
    "code": "AR",
    "emoji": "🇦🇷",
    "name": "Argentina"
  },
  {
    "code": "AS",
    "emoji": "🇦🇸",
    "name": "American Samoa"
  },
  {
    "code": "AT",
    "emoji": "🇦🇹",
    "name": "Austria"
  }];

  const answer = {
    "code": "AR",
    "emoji": "🇦🇷",
    "name": "Argentina"
  };

  dispatch({ type: GENERATE_ROUND, answer: answer, options: options })
}

export const submitAnswer = (guess) => (dispatch, getState) => {
  dispatch({ type: SET_SUBMITTED })
  const { answer: { name } } = getState().game;
  console.log(name, guess)
  if (name == guess) {
    dispatch({ type: INCREMENT_STREAK })
  } else {
    dispatch({ type: RESET_STREAK })
  }
};

export const resetGame = () => (dispatch, getState) => {
  dispatch({ type: RESET_GAME });
};