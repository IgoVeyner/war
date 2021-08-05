const handleTable = (state = {
  player: [],
  computer: [],
  last: {
    player: null,
    computer: null
  }
                    }, action) => {
  switch (action.type) {
    case "ADD_TO_TABLE":
      const [playerCard, computerCard] = action.payload

      return {
        player: [...state['player'], playerCard],
        computer: [...state['computer'], computerCard],
        last: {
          player: playerCard,
          computer: computerCard
        }
      }

    case "CLEAR_TABLE":
      return {
        player: [],
        computer: [],
        last: {
          player: state["last"]["player"],
          computer: state["last"]["computer"]
        }
      }

    default:
      return state
  }
}

export default handleTable