import { useEffect } from "react";

const useAddCardsToHand = (roundStatus: boolean, checkForMoreCards: any) => {
 useEffect(() => {
   if (roundStatus === false) {
    checkForMoreCards("PLAYER")
    checkForMoreCards("COMPUTER")
   }
 }, [roundStatus, checkForMoreCards]); 
}

export default useAddCardsToHand