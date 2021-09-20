export const setTie = (tieStatus: boolean) => {
  return {
    type: "SET_TIE",
    payload: tieStatus
  }
} 

export const setCount = (count: number) => {
  return {
    type: "SET_TIE_COUNT",
    payload: count
  }
}

export const resetTieCount = () => {
  return {
    type: "RESET_TIE_COUNT",
    payload: {}
  }
}