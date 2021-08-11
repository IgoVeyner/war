import { useSelector } from "react-redux"

const Ledger = () => {
  const ledger = useSelector(state => state.ledger)

  const renderHistory = () => {
    return ledger.map((pair, i) => {
      return (
        <tr>
          <td>{`${pair['player'].rank} of ${pair['player'].suit}`}</td>
          <td>{`${pair['computer'].rank} of ${pair['computer'].suit}`}</td>
        </tr>
      )
    })
  }


  return (
    <div className="ledger-container">
      <table 
        className="ledger-outer"
        cellSpacing="0"
        cellPadding="0"
        border="0"
        >
        <tr>
          <td>
            <table 
              className="ledger-header"
              cellSpacing="0"
              cellPadding="8px"
              border="1"
            >
              <tr>
                <th>Player</th>
                <th>Computer</th>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <div className="ledger-data-container">
              <table 
                className="ledger-data"
                cellSpacing="0"
                cellPadding="8px"
                border="1"
              >
                  {renderHistory()}
              </table>
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Ledger