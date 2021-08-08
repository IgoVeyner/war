const PostGame = ({ winner }) => {
  const refreshPage = () => {
    window.location.reload(false)
  }
  
  return (
    <div>
      <h2>{winner}</h2>
      <button onClick={refreshPage}>Play Again</button>
    </div>
  )
}

export default PostGame