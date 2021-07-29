const handleTable = (state = {
  player: [],
  computer: []
                    }, action) => {
  switch (action.type) {
    case "ADD_TO_TABLE":
      return action.payload

    case "CLEAR_TABLE":
      return action.payload

    default:
      return state
  }
}

export default handleTable