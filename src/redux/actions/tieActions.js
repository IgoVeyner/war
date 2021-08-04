export const setTie = (tieStatus) => {
  return {
    type: "SET_TIE",
    payload: tieStatus
  }
} 

export const setCount = (count) => {
  return {
    type: "SET_TIE_COUNT",
    payload: count
  }
}