export const addToTable = (cards) => {
  return {
    type: "ADD_TO_TABLE",
    payload: cards
  }
}

export const clearTable = () => {
  return {
    type: "CLEAR_TABLE",
    payload: {
      player: [],
      computer: []
    }
  }
}