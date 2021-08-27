export const addToLedger = (cards) => {
  return {
    type: "ADD_TO_LEDGER",
    payload: cards
  }
}

export const resetLedger = () => {
  return {
    type: "RESET_LEDGER",
    payload: []
  }
}