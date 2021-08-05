export const addToLedger = (cards) => {
  return {
    type: "ADD_TO_LEDGER",
    payload: cards
  }
}