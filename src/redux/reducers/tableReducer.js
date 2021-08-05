const handleTable = (state = {
  player: [],
  computer: []
                    }, action) => {
  switch (action.type) {
    case "ADD_TO_TABLE":
      const [playerCard, computerCard] = action.payload

      return {
        player: [...state['player'], playerCard],
        computer: [...state['computer'], computerCard]
      }

    case "CLEAR_TABLE":
      return action.payload

    default:
      return state
  }
}

export default handleTable