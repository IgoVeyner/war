import { useEffect } from "react"

const useResetGame = (resetGameLedger, resetHands, resetTable) => {
  useEffect(() => {
    return (() => {
      resetGameLedger()
      resetHands()
      resetTable()
    })
  }, [resetGameLedger, resetHands, resetTable])
}

export default useResetGame