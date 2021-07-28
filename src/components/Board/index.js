import { useDispatch, useSelector } from 'react-redux'
import { setPlayerHand, setComputerHand } from '../../redux/actions/handActions'
import { getHands } from "../../services/hands"
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

  return (
    <div>
      { playerCards === 0 && computerCards === 0 ? 
        <PreGameLobby startGame={startGame} /> 
        :
        null  
      }
      <div>
        Player has {playerCards} cards
      </div>
      <div>
        Computer has {computerCards} cards
      </div>
    </div>
  )
}

export default Board