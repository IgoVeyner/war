import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { resetComputerHand, resetPlayerHand } from '../../../redux/actions/handActions'
import { resetLedger } from "../../../redux/actions/ledgerActions";
import { resetTieCount } from "../../../redux/actions/tieActions";
import { clearTable } from "../../../redux/actions/tableActions";

const PostGame = ({ winner, onPress }) => {
  const dispatch = useDispatch()

  const resetHands = () => {
    dispatch(resetPlayerHand())
    dispatch(resetComputerHand())
  }

  const resetGameLedger = () => dispatch(resetLedger()) 
  const resetTable = () => {
    dispatch(resetTieCount())
    dispatch(clearTable())
  }

  const lowerCase = () => {
    return `${winner.toLowerCase()} Wins!`
  }

  const displayWinner = () => {
    if (winner === "TIE") {
      return "Tie Game!"
    } else {
      return lowerCase()
    }
  } 

  // TODO: Turn this into custom hook
  useEffect(() => {
    return (() => {
      resetGameLedger()
      resetHands()
      resetTable()
    })
  }, [])
  
  return (
    <div>
      <h1 className="postgame-header">{displayWinner()}</h1>
      <button className="button-reset" onClick={onPress}>Play Again</button>
    </div>
  )
}

export default PostGame