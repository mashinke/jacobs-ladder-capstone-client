const dummyStore = {
  gameState: {
    ended: false,
    roll: 8,
    hintsUsed: 6,
    position: 23,
    turnNumber: 5,
    successfulRolls: 3,
    totalRolls: 4,
    successfulSkips: 0,
    totalSkips: 1
  },
  gameSettings: {
    gameId: 54,
    maxHints: 18,
    totalStages: 4,
    stageSize: 18
  },
  rollCard: {
    cardId: 32,
    cardImage: '/cards/32.png',
    questionText: 'what is this letter name?',
    answers: [
      'alef', 'zayin', 'mem', 'kaf'
    ]
  },
  skipCard: {
    cardId: 18,
    image: '/cards/18.png',
    questionText: 'what does this word mean?',
    answers: [
      'work', 'sleep', 'notebook', 'to play'
    ]
  },
  timeElapsed: 832
}

export default dummyStore;