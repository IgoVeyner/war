const handlePlayer = (state = {
  hand: []
                      }, action) => {
  switch (action.type) {
    case "RESET_PLAYER_HAND":
      return action.payload

    case "SET_PLAYER_HAND":
      const newState = {...state = {hand: action.payload}}
      return newState

    case "REMOVE_PLAYER_CARD":
      // remove from hand the card from action.payload
      return action.payload

    default: 
      return state
  }
}

export default handlePlayer