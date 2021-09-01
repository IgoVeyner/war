type PreGameLobbyProps = {
  onPress: React.MouseEventHandler<HTMLButtonElement>
}

const PreGameLobby = ({ onPress }: PreGameLobbyProps) => {
  return (
    <div className="button-container">
      <button 
        className="button-deal"
        onClick={onPress}>
        Deal
      </button>
    </div>
  )
}

export default PreGameLobby