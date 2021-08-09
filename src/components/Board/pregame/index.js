const PreGameLobby = ({ startGame }) => {
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