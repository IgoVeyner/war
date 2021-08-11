const NextButton = ({ getNextCards }) => {
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