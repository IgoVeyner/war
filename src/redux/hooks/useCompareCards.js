import { useEffect, useRef } from 'react'

const useCompareCards = (compareLastCards, cardsOnTable, tieStatus, setRoundStatus) => {
  const didMount = useRef(false)
  
  useEffect(() => {
    if ( didMount.current && 
      cardsOnTable["player"].length && 
      cardsOnTable["computer"].length ) {
        if (tieStatus === false) {
          compareLastCards()
        }
        setRoundStatus(false)
    } else {
      didMount.current = true
    }

  }, [cardsOnTable, compareLastCards, tieStatus, setRoundStatus]);
}

export default useCompareCards