import { combineReducers } from "redux"
import handleComputer from "./computerReducer"
import handlePlayer from "./playerReducer"
import handleTable from "./tableReducer"
import handleTie from "./tieReducer"

const rootReducer = combineReducers({
  player: handlePlayer,
  computer: handleComputer,
  table: handleTable,
  tie: handleTie
})

export default rootReducer