import { combineReducers } from "redux"
import handleComputer from "./computerReducer"
import handleLedger from "./ledgerReducer"
import handlePlayer from "./playerReducer"
import handleTable from "./tableReducer"
import handleTie from "./tieReducer"

export const rootReducer = combineReducers({
  player: handlePlayer,
  computer: handleComputer,
  table: handleTable,
  tie: handleTie,
  ledger: handleLedger
})

export type RootState = ReturnType<typeof rootReducer>