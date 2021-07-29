import { useDispatch, useSelector } from 'react-redux'
import { 
  setPlayerHand, setComputerHand,
  removePlayerCard, removeComputerCard,
  addToPlayerUsed, addToComputerUsed
  } from '../../redux/actions/handActions'
import { addToTable, clearTable } from '../../redux/actions/tableActions'
import { getHands, getCard, compareCards } from "../../services/hands"
import InGame from './ingame'
import PreGameLobby from './pregame'

const Board = () => {
  const dispatch = useDispatch()
  const playerHand = useSelector(state => state.player)
  const computerHand = useSelector(state => state.computer)
  const cardsOnTable = useSelector(state => state.table)

  const playerCards = playerHand['hand'].length
  const playerUsed = playerHand['used'].length
  const computerCards = computerHand['hand'].length
  const computerUsed = computerHand['used'].length
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

  const compareLastCards = () => {
    const lastPlayerCard = cardsOnTable["player"][cardsOnTable["player"].length - 1],
      lastComputerCard = cardsOnTable["computer"][cardsOnTable["computer"].length  -1]
    
    const result = compareCards(lastPlayerCard, lastComputerCard)

    if (result === "TIE") {
      console.log("TODO: TIE")
    } else if (result === "PLAYER") {
      dispatch(addToPlayerUsed(cardsOnTable))
    } else {
      dispatch(addToComputerUsed(cardsOnTable))
    }
    dispatch(clearTable({
      player: [],
      computer: []
    }))
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
          playerUsed={playerUsed}
          computerCards={computerCards}
          computerUsed={computerUsed}
          tableCards={tableCards}
          getNextCards={getNextCards}
          compareLastCards={compareLastCards}
        />
      }
    </div>
  )
}

export default Board