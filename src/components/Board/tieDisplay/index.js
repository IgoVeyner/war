const TieDisplay = ({ tieCount }) => {
  return (
    <div>
      <h2>WAR!</h2>
      <p>{`${4 - tieCount} cards left`}</p>
    </div>
  )
}

export default TieDisplay