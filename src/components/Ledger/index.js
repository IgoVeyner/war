import { useSelector } from "react-redux"

const Ledger = () => {
  const ledger = useSelector(state => state.ledger)

  const renderHistory = () => {
    return ledger.map(pair => {
      return (
        <div>
          {`Player: ${pair['player'].rank} of ${pair['player'].suit} 
            vs
            Computer: ${pair['computer'].rank} of ${pair['computer'].suit}`}
        </div>
      )
    })
  }

  return (
    <div>
      {renderHistory()}
    </div>
  )
}

export default Ledger