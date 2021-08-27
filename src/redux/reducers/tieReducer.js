const handleTie = (state = {
  tieStatus: false,
  tieCount: 0
                    }, action) => {
  switch (action.type) {
    case "SET_TIE":
      return {
        tieStatus: action.payload,
        tieCount: state.tieCount
      }

    case "SET_TIE_COUNT":
      let newState

      if (action.payload > 3) {
        newState = {
          tieStatus: false,
          tieCount: 0,
        }
      } else {
        newState = {
          tieStatus: true,
          tieCount: action.payload
        }
      }
      
      return newState

    case "RESET_TIE_COUNT":
      return {
        tieStatus: false,
        tieCount: 0
      }

    default:
      return state
  }
}

export default handleTie