import { useEffect } from "react";

const useAddCardsToHand = (roundStatus, checkForMoreCards) => {
 useEffect(() => {
   if (roundStatus === false) {
    checkForMoreCards("PLAYER")
    checkForMoreCards("COMPUTER")
   }
 }, [roundStatus, checkForMoreCards]); 
}

export default useAddCardsToHand