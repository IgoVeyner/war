import { useEffect } from 'react'

const useCheckWinner = (setWinner, playerHand, computerHand, gameStatus, cardsDelt) => {
  
  useEffect(() => {
    if (gameStatus && cardsDelt) {
      const playerCards = playerHand['hand'].length,
        playerUsed = playerHand['used'].length,
        computerCards = computerHand['hand'].length,
        computerUsed = computerHand['used'].length
  
        if ( playerCards === 0 && playerUsed === 0 && 
          computerCards === 0 && computerUsed === 0 ) {
            setWinner("TIE")
          } else if ( playerUsed === 0 && playerCards === 0 ) {
            setWinner("COMPUTER")
          } else if ( computerUsed === 0 && computerCards === 0 ) {
            setWinner("PLAYER")
          }
    }

  }, [gameStatus, computerHand, playerHand, cardsDelt, setWinner]);
}

export default useCheckWinner