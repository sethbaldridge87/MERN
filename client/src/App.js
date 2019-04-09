import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Parallax from "./components/Parallax";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Parallax />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
