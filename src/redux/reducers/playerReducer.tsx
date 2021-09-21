const handlePlayer = (state = {
  hand: [],
  used: []
                      }, action: any) => {
  switch (action.type) {
    case "RESET_PLAYER_HAND":
      return action.payload

    case "SET_PLAYER_HAND":
      return {
        hand: action.payload,
        used: state["used"]
      }

    case "REMOVE_PLAYER_CARD":
      return {
          hand: state['hand'].filter(hand => hand !== action.payload),
          used: [...state['used']]
      }

    case "ADD_TO_PLAYER_USED":
      const [ playerCards, computerCards ]: [][] = Object.values(action.payload),
        usedCards = [...playerCards, ...computerCards]

      return { 
          hand: [...state['hand']],
          used: [...state['used'], ...usedCards]
      }
      
    case "CLEAR_PLAYER_USED":
      return {
        hand: [...state['hand']],
        used: []
      }
      
    default: 
      return state
  }
}

export default handlePlayer