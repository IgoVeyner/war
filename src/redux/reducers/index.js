import { combineReducers } from "redux"
import handleComputer from "./computerReducer"
import handlePlayer from "./playerReducer"
import handleTable from "./tableReducer"

const rootReducer = combineReducers({
  player: handlePlayer,
  computer: handleComputer,
  table: handleTable
})

export default rootReducer