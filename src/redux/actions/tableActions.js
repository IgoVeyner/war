export const addToTable = (cards) => {
  return {
    type: "ADD_TO_TABLE",
    payload: cards
  }
}

export const clearTable = (cards) => {
  return {
    type: "CLEAR_TABLE",
    payload: cards
  }
}