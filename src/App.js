import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./components/About";
import Board from "./components/Board";
import Nav from './components/Header/Nav'
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <Router>
      <Nav />

      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/play">
            <Board />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </main>
    </ Router>
  );
}

export default App;
