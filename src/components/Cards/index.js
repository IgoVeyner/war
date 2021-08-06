import { useSelector } from "react-redux"
import { urls } from "./urlLookup"

const CardsContainer = ({ gameStatus }) => {
  const allCards = useSelector(state => state.ledger),
    { tieStatus } = useSelector(state => state.tie)
  

  const renderCards = () => {
    if (gameStatus && allCards.length > 0) {
      // render the cards
      const playerCard = Object.values(allCards[0]['player']).join("-of-"),
        computerCard = Object.values(allCards[0]['computer']).join("-of-"),
        cardInfo = [
          ["Player", urls[playerCard], playerCard],
          ["Computer", urls[computerCard], computerCard]
        ]
      
      return cardInfo.map((data, i) => {
        return renderContainer(data)
      })

    } else {
      // render empty board
      const cardInfo = [
        ["Player", urls["back"], "Card-Back"],
        ["Computer", urls["back"], "Card-Back"]
      ]

      return cardInfo.map((data, i) => {
        return renderContainer(data)
      })
    }
  }

  const renderContainer = ([ player, url, text ]) => {
    return (
      <div>
        <h1>{player}</h1>
        <img src={url} alt={text} />
      </div>
    )
  }

  return (
    <div className="cards">
      {renderCards()}
    </div>
  )
}

export default CardsContainer