// update with specific function
type PreGameLobbyProps = {
  startGame: any
}

const PreGameLobby = ({ startGame }: PreGameLobbyProps) => {
  return (
    <div className="button-container">
      <button 
        className="button-deal"
        onClick={startGame}>
        Deal
      </button>
    </div>
  )
}

export default PreGameLobby