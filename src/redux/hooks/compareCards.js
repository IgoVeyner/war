import { useEffect, useRef } from 'react'

const useCompareCards = (compareLastCards, cardsOnTable) => {
  const didMount = useRef(false)

  useEffect(() => {
    if (didMount.current) {
      compareLastCards()
      didMount.current = false
    } else {
      didMount.current = true
    }

  }, [cardsOnTable]);
}

export default useCompareCards