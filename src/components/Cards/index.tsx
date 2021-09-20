import { useSelector } from "react-redux"
import { urls } from "./urlLookup"
import { RootState } from '../../redux/reducers/index'
import { Hands } from '../Board/index'

type CardsContainerProps = {
  gameStatus: Boolean,
  playerHandLength: Number,
  computerHandLength: Number
}

const CardsContainer = ({ gameStatus, playerHandLength, computerHandLength }: 
  CardsContainerProps) => {
  const allCards: Hands[] = useSelector((state: RootState) => state.ledger),
    { tieCount } = useSelector((state: RootState) => state.tie)
  
  const renderCards = () => {
    let cardInfo: any

    if (gameStatus && allCards.length > 0 && tieCount === 0) {
      const playerCard: string = Object.values(allCards[0]['player']).join("-of-"),
        computerCard: string = Object.values(allCards[0]['computer']).join("-of-")

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

  const mapCardInfo = (cardInfo: any[]) => {
    return cardInfo.map((data: string[], i: number) => {
      return renderContainer(data, i)
    })
  }

  const renderContainer = ([ player, url, text ]: string[], index: number) => {
    return (
      <div key={`cards-${index}`} className="card-container">
        <h1>{player}</h1>
        <h3 className="card-count">Cards: {player === "Player" ? playerHandLength : computerHandLength}</h3>
        <img src={url} alt={text} className="card" />
      </div>
    )
  }

  return (
    <div className="cards-container">
      {renderCards()}
    </div>
  )
}

export default CardsContainer