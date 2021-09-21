const handleTable = (state = {
  player: [],
  computer: []
                    }, action: any) => {
  switch (action.type) {
    case "ADD_TO_TABLE":
      const [playerCard, computerCard] = action.payload

      return {
        player: [...state['player'], playerCard],
        computer: [...state['computer'], computerCard]
      }

    case "CLEAR_TABLE":
      return {
        player: [],
        computer: []
      }

    default:
      return state
  }
}

export default handleTable