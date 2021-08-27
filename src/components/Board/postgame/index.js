const PostGame = ({ winner }) => {
  const refreshPage = () => {
    window.location.reload(false)
  }

  const lowerCase = () => {
    return winner.toLowerCase()
  }
  
  return (
    <div>
      <h1 className="postgame-header">{lowerCase()} Wins!</h1>
      <button className="button-reset" onClick={refreshPage}>Play Again</button>
    </div>
  )
}

export default PostGame