import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  setPlayerHand, setComputerHand,
  removePlayerCard, removeComputerCard,
  addToPlayerUsed, addToComputerUsed,
  clearPlayerUsed, clearComputerUsed
  } from '../../redux/actions/handActions'
import { addToTable, clearTable } from '../../redux/actions/tableActions'
import { getHands, getCard, compareCards } from "../../services/hands"
import InGame from './ingame'
import PreGameLobby from './pregame'

const Board = () => {
  const [gameStatus, setGameStatus] = useState(false),
    [tieStatus, setTieStatus] = useState(false),
    [tieCount, setTieCount] = useState(0),
  
    dispatch = useDispatch(),
    playerHand = useSelector(state => state.player),
    computerHand = useSelector(state => state.computer),
    cardsOnTable = useSelector(state => state.table),

    addToPlayerHand = () => dispatch(setPlayerHand(playerHand['used'])),
    addToComputerHand = () => dispatch(setComputerHand(computerHand['used'])),

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
    console.log(tieStatus, tieCount, cardsOnTable)

    if (playerUsed && playerCards === 1) {
      addToPlayerHand()
      dispatch(clearPlayerUsed([]))
    }

    const playerCard = getCard(playerHand)
    dispatch(removePlayerCard(playerCard))

    const newState = { player: [...cardsOnTable['player'], playerCard] }
    dispatch(addToTable(newState))
  }

  const computerTurn = () => {
    if (computerUsed && computerCards === 1) {
      addToComputerHand()
      dispatch(clearComputerUsed([]))
    }

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
      setTieStatus(true)

    } else if (result === "PLAYER") {
      dispatch(addToPlayerUsed(cardsOnTable))
      dispatch(clearTable({
        player: [],
        computer: []
      }))
    } else {
      dispatch(addToComputerUsed(cardsOnTable))
      dispatch(clearTable({
        player: [],
        computer: []
      }))
    }
  }

  const resetTieStatusAndCount = () => {
    setTieStatus(false)
    setTieCount(0)
  }

  const getNextCards = () => {
    if (tieCount === 2) {
      resetTieStatusAndCount()
    } 

    if (tieStatus && tieCount !== 2) {
      setTieCount(tieCount + 1)
    }
      
    playerTurn()
    computerTurn()
  }

  const renderView = () => {
    if (gameStatus !== true) {
      return <PreGameLobby startGame={startGame} />
    } else {

      if (playerCards === 0 && playerUsed && 
          computerCards === 0 && computerUsed === 0) {
        console.log("its a tie")
      } else if (playerCards === 0 && playerUsed === 0) {
        console.log("computer wins")
      } else if (computerCards === 0 && computerUsed === 0) {
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
          tieStatus={tieStatus}
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