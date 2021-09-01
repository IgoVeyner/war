type TieDisplayProps = {
  tieCount: number
}

const TieDisplay = ({ tieCount }: TieDisplayProps) => {
  return (
    <div>
      <h2>WAR!</h2>
      <p className="tie-text">{`${4 - tieCount} cards left`}</p>
    </div>
  )
}

export default TieDisplay