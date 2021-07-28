const handleComputer = (state = {
  hand: []
                      }, action) => {
  switch (action.type) {
    case "RESET_HAND":
      return action.payload

    case "SET_HAND":
      // set the new hand
      return action.payload

    case "REMOVE_CARD":
      // remove from hand the card from action.payload
      return action.payload

    default: 
      return state
  }
}

export default handleComputer