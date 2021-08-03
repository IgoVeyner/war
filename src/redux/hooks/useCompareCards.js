import { useEffect, useRef } from 'react'

const useCompareCards = (compareLastCards, cardsOnTable, tieStatus) => {
  const didMount = useRef(false)
  
  useEffect(() => {
    if ( tieStatus === false && didMount.current && 
      cardsOnTable["player"].length && 
      cardsOnTable["computer"].length ) {
      compareLastCards()
    } else {
      didMount.current = true
    }

  }, [cardsOnTable, compareLastCards, tieStatus]);
}

export default useCompareCards