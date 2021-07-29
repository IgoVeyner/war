const createDeck = () => {
  const suits = ["Hearts", "Spades", "Diamonds", "Clover"]
  const ranks = [
    "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "Jack", "Queen", "King", "Ace"
  ]

  const deck = []

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({
        rank,
        suit
      })
    }
  }

  return deck
}

export const getRandomCard = (deck) => {
  return deck.splice(Math.floor(Math.random() * deck.length), 1)
}

export const getCard = (deck) => {
  return deck['hand'][Math.floor(Math.random() * deck['hand'].length)]
}

export const getHands = () => {
  const deck = createDeck()
  const hand2 = []

  while (deck.length !== 26) {
    const [ card ] = getRandomCard(deck)
    hand2.push(card)
  }
  
  return [deck, hand2]
}

export const compareCards = (player, computer) => {
  const rankings = {
    "2": 0, "3": 1, "4": 2, "5": 3, "6": 4, "7": 5, "8": 6, "9": 7,
    "10": 8, "Jack": 9, "Queen": 10, "King": 11, "Ace": 12
  }, 
    playerRank = rankings[player['rank']],
    computerRank = rankings[computer['rank']]

  if (playerRank === computerRank) {
    console.log("Same!")
  } else if (playerRank > computerRank) {
    console.log("Player wins round")
  } else {
    console.log("Computer wins round")
  }
}