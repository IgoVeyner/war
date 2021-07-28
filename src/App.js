import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Header/Nav'

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route path="/">
          {/* add landing page */}
        </Route>
        <Route path="/play">
          {/* add gameboard component */}
        </Route>
        <Route exact path="/about">
          {/* add about component */}
        </Route>
        <Route path="*">
          {/* add fallback */}
        </Route>
      </Switch>
    </ Router>
  );
}

export default App;
