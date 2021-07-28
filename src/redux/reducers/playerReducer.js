const handlePlayer = (state = {
  hand: []
                      }, action) => {
  switch (action.type) {
    case "RESET_PLAYER_HAND":
      return action.payload

    case "SET_PLAYER_HAND":
      return {...state = {hand: action.payload}}

    case "REMOVE_PLAYER_CARD":
      return {...state = {hand: state['hand'].filter(hand => hand !== action.payload)}}

    default: 
      return state
  }
}

export default handlePlayer