const handleTable = (state = {
  player: [],
  computer: []
                    }, action) => {
  switch (action.type) {
    case "ADD_TO_TABLE":
      const [ key ] = Object.keys(action.payload),
            [ value ] = Object.values(action.payload),
            newState = { ...state }
      newState[key] = value
      return newState

    case "CLEAR_TABLE":
      return action.payload

    default:
      return state
  }
}

export default handleTable