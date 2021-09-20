import { useSelector } from "react-redux"
import { RootState } from '../../redux/reducers/index'
import { LedgerCards } from "../Board/index"

const Ledger = () => {
  const ledger: LedgerCards[] = useSelector((state: RootState) => state.ledger)

  const renderHistory = () => {
    return ledger.map((pair, i) => {
      return (
        <tr>
          <td className='turn'>{ledger.length - i}</td>
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
        >
        <tr>
          <td>
            <table 
              className="ledger-header"
              cellSpacing="0"
              cellPadding="8px"
            >
              <tr>
                <th className='turn'>Turn</th>
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