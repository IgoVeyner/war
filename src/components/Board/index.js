import { useDispatch, useSelector } from 'react-redux'
import { 
  setPlayerHand, setComputerHand,
  removePlayerCard, removeComputerCard
  } from '../../redux/actions/handActions'
import { addToTable } from '../../redux/actions/tableActions'
import { getHands, getCard } from "../../services/hands"
import InGame from './ingame'
import PreGameLobby from './pregame'

const Board = () => {
  const dispatch = useDispatch()
  const playerHand = useSelector(state => state.player)
  const computerHand = useSelector(state => state.computer)
  const cardsOnTable = useSelector(state => state.table)

  const playerCards = playerHand['hand'].length
  const computerCards = computerHand['hand'].length
  const tableCards = cardsOnTable['player'].length + cardsOnTable['computer'].length

  const startGame = () => {
    const hands = getHands()
    dispatch(setPlayerHand(hands[0]))
    dispatch(setComputerHand(hands[1]))
  }

  const playerTurn = () => {
    const playerCard = getCard(playerHand)
    dispatch(removePlayerCard(playerCard))

    const newState = { player: [...cardsOnTable['player'], playerCard] }
    dispatch(addToTable(newState))
  }

  const computerTurn = () => {
    const computerCard = getCard(computerHand)
    dispatch(removeComputerCard(computerCard))

    const newState = { computer: [...cardsOnTable['computer'], computerCard] }
    dispatch(addToTable(newState))
  }

  const getNextCards = () => {
    playerTurn()
    computerTurn()
  }

  return (
    <div>
      { playerCards === 0 && computerCards === 0 ? 
        <PreGameLobby startGame={startGame} /> 
        :
        <InGame 
          playerCards={playerCards} 
          computerCards={computerCards}
          tableCards={tableCards}
          getNextCards={getNextCards}
        />
      }
    </div>
  )
}

export default Board