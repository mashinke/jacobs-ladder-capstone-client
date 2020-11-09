const dummyStore = {
  game_state: {
    game_id: 54,
    max_hints: 18,
    no_of_stages: 4,
    ended: false,
    roll: 8,
    hints_used: 6,
    position: 43
  },
  roll_card: {
    card_id: 32,
    image: '/cards/32.png',
    question_text: 'what is this letter name?',
    answers: [
      'alef', 'zayin', 'mem', 'kaf'
    ]
  },
  skip_card: {
    card_id: 18,
    image: '/cards/18.png',
    question_text: 'what does this word mean?',
    answers: [
      'work', 'sleep', 'notebook', 'to play'
    ]
  },
  time_elapsed: 832
}

export default dummyStore;