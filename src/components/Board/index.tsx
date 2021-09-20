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
import { getHands, getCard, compareCards, Card } from "../../services/hands"
import CardsContainer from '../Cards/index'
import PostGame from './postgame/index'
import PreGameLobby from './pregame/index'
import Ledger from '../Ledger/index'
import useAddCardsToHand from '../../redux/hooks/useAddCardsToHand'
import NextButton from './nextButton/index'
import TieDisplay from './tieDisplay/index'
import { RootState } from '../../redux/reducers/index'

type BoardProps = {
  resetGame: React.MouseEventHandler<HTMLButtonElement>
}

export interface Hands {
  player: Hand,
  computer: Hand
}

export interface Hand {
  hand: Card[],
  used: Card[]
}

export interface CardsOnTable {
  player: Card[],
  computer: Card[]
}

export interface LedgerCards {
  player: Card,
  computer: Card
}

const Board = ({ resetGame }: BoardProps) => {
  const [gameStatus, setGameStatus] = useState(false),
  [winner, setWinner] = useState(''),
  [roundStatus, setRoundStatus] = useState(false),
  
  // Grab State from redux store
  playerHand = useSelector((state: RootState) => state.player),
  computerHand = useSelector((state: RootState) => state.computer),
  cardsOnTable: CardsOnTable = useSelector((state: RootState) => state.table),
  { tieStatus, tieCount } = useSelector((state: RootState) => state.tie),
  
  // Dispatch helpers 
  dispatch = useDispatch(),
  setPlayersHand = (hand: object[]) => dispatch(setPlayerHand(hand)),
  setComputersHand = (hand: object[]) => dispatch(setComputerHand(hand)),
  addToPlayerHand = () => dispatch(setPlayerHand(playerHand['used'])),
  addToComputerHand = () => dispatch(setComputerHand(computerHand['used'])),
  addToPlayerUsedPile = () => dispatch(addToPlayerUsed(cardsOnTable)),
  addToComputerUsedPile = () =>  dispatch(addToComputerUsed(cardsOnTable)),
  clearPlayerUsedPile = () => dispatch(clearPlayerUsed([])), 
  clearComputerUsedPile = () => dispatch(clearComputerUsed([])),
  removePlayersCard = (card: object) => dispatch(removePlayerCard(card)),
  removeComputersCard = (card: object) => dispatch(removeComputerCard(card)),
  setTieStatus = () => dispatch(setTie(!tieStatus)),
  setTieCount = (count = tieCount + 1) => dispatch(setCount(count)),
  addToTableStore = (cards: object[]) => dispatch(addToTable(cards)),
  clearGameTable = () => dispatch(clearTable()),
  addToGameLedger = (cards: LedgerCards) => dispatch(addToLedger(cards)),
  
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

  addToHand = (player: string) => {
    player === "PLAYER" ? addToPlayerHand() : addToComputerHand()
  },

  clearUsed = (player: string) => {
    player === "PLAYER" ? clearPlayerUsedPile() : clearComputerUsedPile()
  },

  checkForMoreCards = (player: string) => {
    if ( (player === "PLAYER" && playerUsed && playerCards === 0) || 
      (player === "COMPUTER" && computerUsed && computerCards === 0) ) {
      addToHand(player)
      clearUsed(player)
    } 
  },

  removeCard = (card: object, player: string) => {
    player === "PLAYER" ? removePlayersCard(card) : removeComputersCard(card)
  },

  playCard = (player: string) => {
    const card = player === "PLAYER" ? getCard(playerHand) : getCard(computerHand)
    removeCard(card, player)
    return card
  },

  addToUsed = (player: string) => {
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
        setTieStatus()
      } else {
        addToUsed(result)
        clearGameTable()
      }
    }
  }

  const renderView = () => {
    if (gameStatus !== true) {
      return <PreGameLobby onPress={startGame} />
    } else if (winner !== '') {
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