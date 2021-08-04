import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  setPlayerHand, setComputerHand,
  removePlayerCard, removeComputerCard,
  addToPlayerUsed, addToComputerUsed,
  clearPlayerUsed, clearComputerUsed
  } from '../../redux/actions/handActions'
import { addToTable, clearTable } from '../../redux/actions/tableActions'
import { setCount, setTie } from '../../redux/actions/tieActions'
import useCheckWinner from '../../redux/hooks/useCheckWinner'
import useCompareCards from '../../redux/hooks/useCompareCards'
import { getHands, getCard, compareCards } from "../../services/hands"
import InGame from './ingame'
import PostGame from './postgame'
import PreGameLobby from './pregame'

const Board = () => {
  const [gameStatus, setGameStatus] = useState(false),
    [winner, setWinner] = useState(false),
    [cardsDelt, setCardsDelt] = useState(false),
  
    playerHand = useSelector(state => state.player),
    computerHand = useSelector(state => state.computer),
    cardsOnTable = useSelector(state => state.table),
    { tieStatus, tieCount } = useSelector(state => state.tie),
    
    dispatch = useDispatch(),
    addToPlayerHand = () => dispatch(setPlayerHand(playerHand['used'])),
    addToComputerHand = () => dispatch(setComputerHand(computerHand['used'])),
    setTieStatus = () => dispatch(setTie(!tieStatus)),
    setTieCount = (count = tieCount + 1) => dispatch(setCount(count)),

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
    setCardsDelt(true)
  }

  const checkForMoreCards = (player) => {
    if (player === "PLAYER") {
      if (playerUsed && playerCards === 1) {
        addToPlayerHand()
        dispatch(clearPlayerUsed([]))
      }
    } else {
      if (computerUsed && computerCards === 1) {
        addToComputerHand()
        dispatch(clearComputerUsed([]))
      }
    }
  }

  const playerTurn = () => {
    checkForMoreCards("PLAYER")
    const playerCard = getCard(playerHand)
    dispatch(removePlayerCard(playerCard))
    return playerCard
  }

  const computerTurn = () => {
    checkForMoreCards("COMPUTER")
    const computerCard = getCard(computerHand)
    dispatch(removeComputerCard(computerCard))
    return computerCard
  }

  const compareLastCards = () => {
    const lastPlayerCard = cardsOnTable["player"][cardsOnTable["player"].length - 1],
      lastComputerCard = cardsOnTable["computer"][cardsOnTable["computer"].length  -1]
    
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
    if (tieStatus) {
      setTieCount()
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
    } else if (winner) {
      return <PostGame winner={winner} />
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
  useCheckWinner(setWinner, playerHand, computerHand, gameStatus, cardsDelt)

  return (
    <div>
      { renderView() }
    </div>
  )
}

export default Board