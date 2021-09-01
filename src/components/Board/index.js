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
import { addToLedger } from '../../redux/actions/ledgerActions'
import useCheckWinner from '../../redux/hooks/useCheckWinner'
import useCompareCards from '../../redux/hooks/useCompareCards'
import { getHands, getCard, compareCards } from "../../services/hands"
import CardsContainer from '../Cards'
import PostGame from './postgame'
import PreGameLobby from './pregame'
import Ledger from '../Ledger'
import useAddCardsToHand from '../../redux/hooks/useAddCardsToHand'
import NextButton from './nextButton'
import TieDisplay from './tieDisplay/index'

const Board = ({ resetGame }) => {
  const [gameStatus, setGameStatus] = useState(false),
    [winner, setWinner] = useState(false),
    [roundStatus, setRoundStatus] = useState(false),
  
  // Grab State from redux store
    playerHand = useSelector(state => state.player),
    computerHand = useSelector(state => state.computer),
    cardsOnTable = useSelector(state => state.table),
    { tieStatus, tieCount } = useSelector(state => state.tie),
    
  // Dispatch helpers 
    dispatch = useDispatch(),
    setPlayersHand = (hand) => dispatch(setPlayerHand(hand)),
    setComputersHand = (hand) => dispatch(setComputerHand(hand)),
    addToPlayerHand = () => dispatch(setPlayerHand(playerHand['used'])),
    addToComputerHand = () => dispatch(setComputerHand(computerHand['used'])),
    addToPlayerUsedPile = () => dispatch(addToPlayerUsed(cardsOnTable)),
    addToComputerUsedPile = () =>  dispatch(addToComputerUsed(cardsOnTable)),
    clearPlayerUsedPile = () => dispatch(clearPlayerUsed([])), 
    clearComputerUsedPile = () => dispatch(clearComputerUsed([])),
    removePlayersCard = (card) => dispatch(removePlayerCard(card)),
    removeComputersCard = (card) => dispatch(removeComputerCard(card)),
    setTieStatus = () => dispatch(setTie(!tieStatus)),
    setTieCount = (count = tieCount + 1) => dispatch(setCount(count)),
    addToTableStore = (cards) => dispatch(addToTable(cards)),
    clearGameTable = () => dispatch(clearTable()),
    addToGameLedger = (cards) => dispatch(addToLedger(cards)),

  // Temp hand lengths for development
    playerHandLength = playerHand['hand'].length + playerHand['used'].length,
    computerHandLength = computerHand['hand'].length + computerHand['used'].length,
    playerCards = playerHand['hand'].length,
    playerUsed = playerHand['used'].length,
    computerCards = computerHand['hand'].length,
    computerUsed = computerHand['used'].length
  
  // Game Logic
  const startGame = () => {
    setGameStatus(true)
    setHands()
  },

  setHands = () => {
    const hands = getHands()
    setPlayersHand(hands[0])
    setComputersHand(hands[1])
  },

  playerTurn = () => playCard("PLAYER"),
  computerTurn = () => playCard("COMPUTER"),

  getNextCards = () => { 
    if (tieStatus) setTieCount()
    setRoundStatus(true)
    addToTableStore([playerTurn(), computerTurn()])
  },

  addToHand = (player) => {
    player === "PLAYER" ? addToPlayerHand() : addToComputerHand()
  },

  clearUsed = (player) => {
    player === "PLAYER" ? clearPlayerUsedPile() : clearComputerUsedPile()
  },

  checkForMoreCards = (player) => {
    if ( (player === "PLAYER" && playerUsed && playerCards === 0) || 
      (player === "COMPUTER" && computerUsed && computerCards === 0) ) {
      addToHand(player)
      clearUsed(player)
    } 
  },

  removeCard = (card, player) => {
    player === "PLAYER" ? removePlayersCard(card) : removeComputersCard(card)
  },

  playCard = (player) => {
    const card = player === "PLAYER" ? getCard(playerHand) : getCard(computerHand)
    removeCard(card, player)
    return card
  },

  addToUsed = (player) => {
    player === "PLAYER" ? addToPlayerUsedPile() : addToComputerUsedPile() 
  },

  compareLastCards = () => {
    const lastPlayerCard = cardsOnTable["player"][cardsOnTable["player"].length - 1],
      lastComputerCard = cardsOnTable["computer"][cardsOnTable["computer"].length - 1]

    if (lastPlayerCard && lastComputerCard) {
      const result = compareCards(lastPlayerCard, lastComputerCard)

      addToGameLedger({ 
        player: lastPlayerCard,
        computer: lastComputerCard
      })
  
      if (result === "TIE") {
        setTieStatus(true)
      } else {
        addToUsed(result)
        clearGameTable()
      }
    }
  }

  const renderView = () => {
    if (gameStatus !== true) {
      return <PreGameLobby startGame={startGame} />
    } else if (winner) {
      return <PostGame winner={winner} onPress={resetGame}/>
    } else {
      return (
        <> 
          <NextButton getNextCards={getNextCards} />
          <div className="game-board-container">
            <CardsContainer 
              gameStatus={gameStatus} 
              playerHandLength={playerHandLength}
              computerHandLength={computerHandLength}
            />
            <Ledger />
          </div>
          {tieStatus ? <TieDisplay tieCount={tieCount} /> : null}
        </>
      )
    }
  }

  useAddCardsToHand(roundStatus, checkForMoreCards)
  useCompareCards(compareLastCards, cardsOnTable, tieStatus, setRoundStatus)
  useCheckWinner(setWinner, playerHand, computerHand, gameStatus, roundStatus)

  return (
    <div className={`game-container ${gameStatus ? "ingame" : ""}`}>
      { renderView() }
    </div>
  )
}

export default Board