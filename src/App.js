import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ExoUn from "./components/ExoUn"
import ExoDeux from "./components/ExoDeux"
import ExoTrois from "./components/ExoTrois"
import ExoQuatre from "./components/ExoQuatre"
import ExoCinq from "./components/ExoCinq"
import ExoSix from "./components/ExoSix"
import ExoSept from "./components/ExoSept"

const App = () => {
  return (
    <Router>
      <h1 className="bg-primary text-center text-warning p-3">React 7 Exercice</h1>
      <hr className="bg-danger" />
      <div className="bg-container border-secondary text-center m-3" >
        <Link to="/exoUn" className="h1 text-center ml-3">
          Exercice 1
        </Link>
        <Link to="/exoDeux" className="h1 text-center ml-3">
          Exercice 2
        </Link>
        <Link to="exoTrois" className="h1 text-center ml-3">
          Exercice 3
        </Link>
        <Link to="/exoQuatre" className="h1 text-center ml-3">
          Exercice 4
        </Link>
        <Link to="/exoCinq" className="h1 text-center ml-3">
          Exercice 5
        </Link>
        <Link to="/exoSix" className="h1 text-center ml-3">
          Exercice 6
        </Link>
        <Link to="/exoSept" className="h1 text-center ml-3">
          Exercice 7
        </Link>
      </div>

      <Switch>
        <Route exact path= "/">
        </Route>
      <Route path="/exoUn">
        <ExoUn />
      </Route>
      <Route path="/exoDeux">
        <ExoDeux />
      </Route>
      <Route path="/exoTrois">
        <ExoTrois />
      </Route>
      <Route path="/exoQuatre">
        <ExoQuatre />
      </Route>
      <Route path="/exoCinq">
        <ExoCinq />
      </Route>
      <Route path="/exoSix">
        <ExoSix />
      </Route>
      <Route path="/exoSept">
        <ExoSept />
      </Route>
      </Switch>
    </Router>
  )
}

export default App;
