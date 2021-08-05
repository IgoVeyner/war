import { useSelector } from "react-redux"

const CardsContainer = () => {
  const tableCards = useSelector(state => state.table),
    lastPlayerCard = tableCards["last"]["player"],
    lastComputerCard = tableCards["last"]["computer"]

  const renderCards = () => {
    if (lastPlayerCard && lastComputerCard) {
      return `${lastPlayerCard.rank} vs ${lastComputerCard.rank}`
    } else {
      return "waiting for cards..."
    }
  }

  return (
    <div>
      {renderCards()}
    </div>
  )
}

export default CardsContainer