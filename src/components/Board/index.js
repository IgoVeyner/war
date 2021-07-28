import { useDispatch, useSelector } from 'react-redux'
import { 
  setPlayerHand, setComputerHand,
  removePlayerCard, removeComputerCard
  } from '../../redux/actions/handActions'
import { getHands, getCard } from "../../services/hands"
import InGame from './ingame'
import PreGameLobby from './pregame'

const Board = () => {
  const dispatch = useDispatch()
  const playerHand = useSelector(state => state.player)
  const computerHand = useSelector(state => state.computer)

  const playerCards = playerHand['hand'].length
  const computerCards = computerHand['hand'].length

  const startGame = () => {
    const hands = getHands()
    dispatch(setPlayerHand(hands[0]))
    dispatch(setComputerHand(hands[1]))
  }

  const getNextCards = () => {
    const playerCard = getCard(playerHand)
    const computerCard = getCard(computerHand)
    dispatch(removePlayerCard(playerCard))
    dispatch(removeComputerCard(computerCard))
  }

  return (
    <div>
      { playerCards === 0 && computerCards === 0 ? 
        <PreGameLobby startGame={startGame} /> 
        :
        <InGame 
          playerCards={playerCards} 
          computerCards={computerCards} 
          getNextCards={getNextCards}
        />
      }
    </div>
  )
}

export default Board