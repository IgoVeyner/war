export const resetHand = () => {
  return {
    type: "RESET_HAND",
    payload: []
  }
}

export const setHand = (cards) => {
  return {
    type: "SET_HAND",
    payload: cards
  }
}

export const removeCard = (card) => {
  return {
    type: "REMOVE_CARD",
    payload: card
  }
}