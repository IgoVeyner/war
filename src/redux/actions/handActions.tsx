const resetHand = (person: string) => {
  return {
    type: `RESET_${person}_HAND`,
    payload: {
      hand: [],
      used: []
    }
  }
}

const setHand = (cards: any[], person: string) => {
  return {
    type: `SET_${person}_HAND`,
    payload: cards
  }
}

const removeCard = (card: any[], person: string) => {
  return {
    type: `REMOVE_${person}_CARD`,
    payload: card
  }
}

const addToUsed = (cards: any[], person: string) => {
  return {
    type: `ADD_TO_${person}_USED`,
    payload: cards
  }
}

const clearUsed = (cards: any[], person: string) => {
  return {
    type: `CLEAR_${person}_USED`,
    payload: cards
  }
}

export const resetPlayerHand = () => resetHand("PLAYER")
export const resetComputerHand = () => resetHand("COMPUTER")

export const setPlayerHand = (cards: any) => setHand(cards, "PLAYER")
export const setComputerHand = (cards: any) => setHand(cards, "COMPUTER")

export const removePlayerCard = (card: any) => removeCard(card, "PLAYER")
export const removeComputerCard = (card: any) => removeCard(card, "COMPUTER")

export const addToPlayerUsed = (cards: any) => addToUsed(cards, "PLAYER")
export const addToComputerUsed = (cards: any) => addToUsed(cards, "COMPUTER")

export const clearPlayerUsed = (cards: any) => clearUsed(cards, "PLAYER")
export const clearComputerUsed = (cards: any) => clearUsed(cards, "COMPUTER")