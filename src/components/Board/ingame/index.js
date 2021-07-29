import { useEffect } from 'react'

const InGame = ({ playerCards, playerUsed,
                  computerCards, computerUsed,
                  tableCards, getNextCards, 
                  compareLastCards, tieStatus }) => {
  useEffect(() => {
    if (tableCards && tieStatus === false) {
      compareLastCards()
    }
    return () => {
      
    };
  }, [tableCards, compareLastCards, tieStatus]);
  
  return (
    <div>
      <div>
        Player has {playerCards} cards and {playerUsed} in their used pile
      </div>
      <div>
        Computer has {computerCards} cards and {computerUsed} in their used pile
      </div>
      <div>
        Table has {tableCards} cards
      </div>
      <button onClick={getNextCards}>
        Pick next card
      </button>
    </div>
  )
}

export default InGame