import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">
        Are you ready for WAR?
      </h1>
      <div>
        <Link to="/play">
          <button className="button-yes">Yes</button>
        </Link>

        <Link to="/about"> 
          <button className="button-no">No</button>
        </Link>
      </div>
    </div>
  )
}

export default Home