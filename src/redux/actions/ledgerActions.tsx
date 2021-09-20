import { LedgerCards } from "../../components/Board/index"

export const addToLedger = (cards: LedgerCards) => {
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