import { useSelector } from "react-redux"
import { urls } from "./urlLookup"

const CardsContainer = ({ gameStatus }) => {
  const allCards = useSelector(state => state.ledger),
    { tieCount } = useSelector(state => state.tie)
  
  const renderCards = () => {
    let cardInfo 

    if (gameStatus && allCards.length > 0 && tieCount === 0) {
      const playerCard = Object.values(allCards[0]['player']).join("-of-"),
        computerCard = Object.values(allCards[0]['computer']).join("-of-")

      cardInfo = [
          ["Player", urls[playerCard], playerCard],
          ["Computer", urls[computerCard], computerCard]
        ]
      
    } else {
      cardInfo = [
        ["Player", urls["back"], "Card-Back"],
        ["Computer", urls["back"], "Card-Back"]
      ]
    }

    return mapCardInfo(cardInfo)
  }

  const mapCardInfo = (cardInfo) => {
    return cardInfo.map((data, i) => {
      return renderContainer(data, i)
    })
  }

  const renderContainer = ([ player, url, text ], index) => {
    return (
      <div key={`cards-${index}`}>
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