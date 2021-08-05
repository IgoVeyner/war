const handleLedger = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_LEDGER":
      return [action.payload, ...state]
    
    default:
      return state
  }
}

export default handleLedger