const handleComputer = (state = {
  hand: []
                      }, action) => {
  switch (action.type) {
    case "RESET_COMPUTER_HAND":
      return action.payload

    case "SET_COMPUTER_HAND":
      const newState = {...state = {hand: action.payload}}
      return newState

    case "REMOVE_COMPUTER_CARD":
      // remove from hand the card from action.payload
      return action.payload

    default: 
      return state
  }
}

export default handleComputer