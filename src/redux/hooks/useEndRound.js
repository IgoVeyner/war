import { useEffect } from 'react'

const useEndRound = (roundStatus, setRoundStatus, gameStatus) => {
  
  useEffect(() => {
    if (roundStatus && gameStatus) {
      setRoundStatus(false)
    }
  }, [roundStatus, setRoundStatus, gameStatus]);
}

export default useEndRound