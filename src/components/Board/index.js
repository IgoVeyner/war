import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  setPlayerHand, setComputerHand,
  removePlayerCard, removeComputerCard,
  addToPlayerUsed, addToComputerUsed,
  clearPlayerUsed, clearComputerUsed
  } from '../../redux/actions/handActions'
import { addToTable, clearTable } from '../../redux/actions/tableActions'
import useCompareCards from '../../redux/hooks/useCompareCards'
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
    if (playerUsed && playerCards === 1) {
      addToPlayerHand()
      dispatch(clearPlayerUsed([]))
    }
    
    const playerCard = getCard(playerHand)
    dispatch(removePlayerCard(playerCard))
    return playerCard
  }

  const computerTurn = () => {
    if (computerUsed && computerCards === 1) {
      addToComputerHand()
      dispatch(clearComputerUsed([]))
    }

    const computerCard = getCard(computerHand)
    dispatch(removeComputerCard(computerCard))
    return computerCard
  }

  const compareLastCards = () => {
    const lastPlayerCard = cardsOnTable["player"][cardsOnTable["player"].length - 1],
      lastComputerCard = cardsOnTable["computer"][cardsOnTable["computer"].length  -1]
    
    console.log(lastPlayerCard, lastComputerCard, playerHand, computerHand)

    if (lastPlayerCard && lastComputerCard) {
      const result = compareCards(lastPlayerCard, lastComputerCard)
  
      if (result === "TIE") {
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
  }

  const getNextCards = () => {      
    if (tieCount === 3) {
      setTieStatus(false)
      setTieCount(0)
    } 

    if (tieStatus && tieCount !== 3) {
      setTieCount(tieCount + 1)
    }
    
    const playerCard = playerTurn()
    const computerCard = computerTurn()

    dispatch(addToTable({
      player: [...cardsOnTable['player'], playerCard],
      computer: [...cardsOnTable['computer'], computerCard]
    }))
  }

  const renderView = () => {
    if (gameStatus !== true) {
      return <PreGameLobby startGame={startGame} />
    } else {
      return <InGame 
        playerCards={playerCards} 
        playerUsed={playerUsed}
        computerCards={computerCards}
        computerUsed={computerUsed}
        tableCards={tableCards}
        getNextCards={getNextCards}
      />
    }
  }

  useCompareCards(compareLastCards, cardsOnTable, tieStatus)

  return (
    <div>
      { renderView() }
    </div>
  )
}

export default Board