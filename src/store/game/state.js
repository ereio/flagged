export default function initialState() {
  return {
    best: 0,
    streak: 0,
    options: [{
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
    }],
    answer: {
      "code": "AR",
      "emoji": "🇦🇷",
      "name": "Argentina"
    },
    submitted: false,
  };
}
