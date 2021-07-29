import { useEffect } from 'react'

const InGame = ({ playerCards, computerCards, 
                  tableCards, getNextCards, 
                  compareLastCards }) => {
  useEffect(() => {

    if (tableCards) {
      compareLastCards()
    }
    return () => {
      
    };
  }, [tableCards, compareLastCards]);
  
  return (
    <div>
      <div>
        Player has {playerCards} cards
      </div>
      <div>
        Computer has {computerCards} cards
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