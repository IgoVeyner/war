import { CardsOnTable } from "../../components/Board/index"

const resetHand = (person: string) => {
  return {
    type: `RESET_${person}_HAND`,
    payload: {
      hand: [],
      used: []
    }
  }
}

const setHand = (cards: {}[], person: string) => {
  return {
    type: `SET_${person}_HAND`,
    payload: cards
  }
}

const removeCard = (card: object, person: string) => {
  return {
    type: `REMOVE_${person}_CARD`,
    payload: card
  }
}

const addToUsed = (cards: CardsOnTable, person: string) => {
  return {
    type: `ADD_TO_${person}_USED`,
    payload: cards
  }
}

const clearUsed = (cards: [], person: string) => {
  return {
    type: `CLEAR_${person}_USED`,
    payload: cards
  }
}

export const resetPlayerHand = () => resetHand("PLAYER")
export const resetComputerHand = () => resetHand("COMPUTER")

export const setPlayerHand = (cards: object[]) => setHand(cards, "PLAYER")
export const setComputerHand = (cards: object[]) => setHand(cards, "COMPUTER")

export const removePlayerCard = (card: object) => removeCard(card, "PLAYER")
export const removeComputerCard = (card: object) => removeCard(card, "COMPUTER")

export const addToPlayerUsed = (cards: CardsOnTable) => addToUsed(cards, "PLAYER")
export const addToComputerUsed = (cards: CardsOnTable) => addToUsed(cards, "COMPUTER")

export const clearPlayerUsed = (cards: []) => clearUsed(cards, "PLAYER")
export const clearComputerUsed = (cards: []) => clearUsed(cards, "COMPUTER")