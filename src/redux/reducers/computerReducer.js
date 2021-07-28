const handleComputer = (state = {
  hand: []
                      }, action) => {
  switch (action.type) {
    case "RESET_COMPUTER_HAND":
      return action.payload

    case "SET_COMPUTER_HAND":
      return {...state = {hand: action.payload}}

    case "REMOVE_COMPUTER_CARD":
      return {...state = {hand: state['hand'].filter(hand => hand !== action.payload)}}

    default: 
      return state
  }
}

export default handleComputer