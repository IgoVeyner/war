const InGame = ({ playerCards, playerUsed,
                  computerCards, computerUsed,
                  tableCards, getNextCards, 
                }) => {
  
  return (
    <div>
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