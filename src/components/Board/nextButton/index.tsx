type NextButtonProps = {
  getNextCards: React.MouseEventHandler<HTMLButtonElement>
}

const NextButton = ({ getNextCards }: NextButtonProps) => {
  return (
    <div className="button-container">
      <button
        className="button-next" 
        onClick={getNextCards}>
        Next
      </button>
    </div>
  )
}

export default NextButton