import { useEffect } from "react"

const useResetGame = (resetGameLedger: CallableFunction, 
  resetHands: CallableFunction, resetTable: CallableFunction) => {
  useEffect(() => {
    return (() => {
      resetGameLedger()
      resetHands()
      resetTable()
    })
  }, [resetGameLedger, resetHands, resetTable])
}

export default useResetGame