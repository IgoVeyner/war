import { combineReducers } from "redux"
import handleComputer from "./computerReducer"
import handlePlayer from "./playerReducer"

const rootReducer = combineReducers({
  player: handlePlayer,
  computer: handleComputer
})

export default rootReducer