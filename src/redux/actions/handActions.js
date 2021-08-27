const resetHand = (person) => {
  return {
    type: `RESET_${person}_HAND`,
    payload: {
      hand: [],
      used: []
    }
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

const addToUsed = (cards, person) => {
  return {
    type: `ADD_TO_${person}_USED`,
    payload: cards
  }
}

const clearUsed = (cards, person) => {
  return {
    type: `CLEAR_${person}_USED`,
    payload: cards
  }
}

export const resetPlayerHand = () => resetHand("PLAYER")
export const resetComputerHand = () => resetHand("COMPUTER")

export const setPlayerHand = (cards) => setHand(cards, "PLAYER")
export const setComputerHand = (cards) => setHand(cards, "COMPUTER")

export const removePlayerCard = (card) => removeCard(card, "PLAYER")
export const removeComputerCard = (card) => removeCard(card, "COMPUTER")

export const addToPlayerUsed = (cards) => addToUsed(cards, "PLAYER")
export const addToComputerUsed = (cards) => addToUsed(cards, "COMPUTER")

export const clearPlayerUsed = (cards) => clearUsed(cards, "PLAYER")
export const clearComputerUsed = (cards) => clearUsed(cards, "COMPUTER")