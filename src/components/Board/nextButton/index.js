const NextButton = ({ getNextCards }) => {

  return (
    <div>
      <button onClick={getNextCards}>
       Next card
      </button>
    </div>
  )
}

export default NextButton