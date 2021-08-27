import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { resetComputerHand, resetPlayerHand } from '../../../redux/actions/handActions'

const PostGame = ({ winner, onPress }) => {
  const dispatch = useDispatch()

  const resetHands = () => {
    dispatch(resetPlayerHand())
    dispatch(resetComputerHand())
  }

  const lowerCase = () => {
    return winner.toLowerCase()
  }

  useEffect(() => {
    resetHands()
  }, [])
  
  return (
    <div>
      <h1 className="postgame-header">{lowerCase()} Wins!</h1>
      <button className="button-reset" onClick={onPress}>Play Again</button>
      <button onClick={resetHands}></button>
    </div>
  )
}

export default PostGame