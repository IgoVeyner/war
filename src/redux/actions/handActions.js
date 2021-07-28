const resetHand = (person) => {
  return {
    type: `RESET_${person}_HAND`,
    payload: []
  }
}

const setHand = (cards, person) => {
  return {
    type: `SET_${person}_HAND`,
    payload: cards
  }
}

const removeCard = (card, person) => {
  return {
    type: `REMOVE_${person}_CARD`,
    payload: card
  }
}

export const resetPlayerHand = () => resetHand("PLAYER")
export const resetComputerHand = () => resetHand("COMPUTER")

export const setPlayerHand = (cards) => setHand(cards, "PLAYER")
export const setComputerHand = (cards) => setHand(cards, "COMPUTER")

export const removePlayerCard = (card) => removeCard(card, "PLAYER")
export const removeComputerCard = (card) => removeCard(card, "COMPUTER")