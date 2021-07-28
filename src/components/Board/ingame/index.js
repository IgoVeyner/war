const InGame = ({ playerCards, computerCards, getNextCards}) => {
  return (
    <div>
      <div>
        Player has {playerCards} cards
      </div>
      <div>
        Computer has {computerCards} cards
      </div>
      <button onClick={getNextCards}>
        Pick next card
      </button>
    </div>
  )
}

export default InGame