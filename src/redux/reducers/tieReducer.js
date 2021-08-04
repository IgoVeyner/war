const handleTie = (state = {
  tieStatus: false,
  count: 0
                    }, action) => {
  switch (action.type) {
    case "SET_TIE":
      return action.payload

    // case "INCREASE_TIE_COUNT":
    //   return action.payload

    default:
      return state
  }
}

export default handleTie