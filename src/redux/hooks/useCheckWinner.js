import { useEffect } from 'react'

const useCheckWinner = (setWinner, playerHand, computerHand, gameStatus, cardsDelt) => {
  
  useEffect(() => {
    if (gameStatus && cardsDelt) {
      console.log("checking for winner")
      const playerCards = playerHand['hand'].length,
        playerUsed = playerHand['used'].length,
        computerCards = computerHand['hand'].length,
        computerUsed = computerHand['used'].length
  
        if ( playerCards === 0 && playerUsed === 0 && 
          computerCards === 0 && computerUsed === 0 ) {
            console.log("Tie game!")
          } else if ( playerUsed === 0 && playerCards === 0 ) {
            console.log("computer wins the game")
          } else if ( computerUsed === 0 && computerCards === 0 ) {
            console.log("player wins the game", "\nPlayer hand:", playerHand,
            "\nComputer Hand:", computerHand
            )
          } else {
            console.log("no winner yet")
          }
    }

  }, [gameStatus, computerHand, playerHand, cardsDelt]);
}

export default useCheckWinner