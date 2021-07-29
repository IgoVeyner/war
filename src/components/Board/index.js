import { useState } from 'react'
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
  const [gameStatus, setGameStatus] = useState(false),

    dispatch = useDispatch(),
    playerHand = useSelector(state => state.player),
    computerHand = useSelector(state => state.computer),
    cardsOnTable = useSelector(state => state.table),

    playerCards = playerHand['hand'].length,
    playerUsed = playerHand['used'].length,
    computerCards = computerHand['hand'].length,
    computerUsed = computerHand['used'].length,
    tableCards = cardsOnTable['player'].length + cardsOnTable['computer'].length


  const startGame = () => {
    setGameStatus(true)
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

  const renderView = () => {
    if (gameStatus !== true) {
      return <PreGameLobby startGame={startGame} />
    } else {
      if (playerCards === 0 && computerCards === 0) {
        console.log("its a tie")
      } else if (playerCards === 0) {
        console.log("computer wins")
      } else if (computerCards === 0) {
        console.log("player wins")
      } else {
        return <InGame 
          playerCards={playerCards} 
          playerUsed={playerUsed}
          computerCards={computerCards}
          computerUsed={computerUsed}
          tableCards={tableCards}
          getNextCards={getNextCards}
          compareLastCards={compareLastCards}
        />
      }
    }
  }

  return (
    <div>
      { renderView() }
    </div>
  )
}

export default Board