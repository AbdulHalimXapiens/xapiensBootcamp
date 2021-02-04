import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </div>
  );
}

export default App;
