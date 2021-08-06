import { useSelector } from "react-redux"

const CardsContainer = ({ gameStatus }) => {
  const allCards = useSelector(state => state.ledger),
    { tieStatus } = useSelector(state => state.tie)
  

  const renderCards = () => {
    if (gameStatus && allCards.length > 0) {
      // render the cards
      const playerCard = allCards[0]['player'],
        computerCard = allCards[0]['computer']

    } else {
      // render empty board
    }
  }

  return (
    <div>
      {renderCards()}
    </div>
  )
}

export default CardsContainer