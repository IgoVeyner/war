import { useEffect, useRef } from 'react'
import { CardsOnTable } from '../../components/Board';

const useCompareCards = (compareLastCards: CallableFunction, cardsOnTable: CardsOnTable, 
  tieStatus: boolean, setRoundStatus: CallableFunction) => {
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