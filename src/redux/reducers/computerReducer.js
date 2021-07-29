const handleComputer = (state = {
  hand: [],
  used: []
                      }, action) => {
  switch (action.type) {
    case "RESET_COMPUTER_HAND":
      return action.payload

    case "SET_COMPUTER_HAND":
      return {
        hand: action.payload,
        used: state["used"]
      }

    case "REMOVE_COMPUTER_CARD":
      return {
        hand: state['hand'].filter(hand => hand !== action.payload),
        used: [...state['used']]
      }

    case "ADD_TO_COMPUTER_USED":
      const [ playerCards, computerCards ] = Object.values(action.payload),
        usedCards = [...playerCards, ...computerCards]

      return {
        hand: [...state['hand']],
        used: [...state['used'], ...usedCards]
      }  

    default: 
      return state
  }
}

export default handleComputer