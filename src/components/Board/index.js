import { useDispatch, useSelector } from 'react-redux'
import { setPlayerHand, setComputerHand } from '../../redux/actions/handActions'
import { getHands } from "../../services/hands"

const Board = () => {
  const dispatch = useDispatch()
  const playerHand = useSelector(state => state.player)
  const computerHand = useSelector(state => state.computer)

  const startGame = () => {
    const hands = getHands()
    dispatch(setPlayerHand(hands[0]))
    dispatch(setComputerHand(hands[1]))
  }

  return (
    <div>
      Playing the game
      <button onClick={startGame}>
        Play
      </button>
      <div>
        Player has {playerHand['hand'].length} cards
      </div>
      <div>
        Computer has {computerHand['hand'].length} cards
      </div>
    </div>
  )
}

export default Board