const handleLedger = (state = [], action: {type: string, payload: any}) => {
  switch (action.type) {
    case "ADD_TO_LEDGER":
      return [action.payload, ...state]
    
    case "RESET_LEDGER":
      return []

    default:
      return state
  }
}

export default handleLedger