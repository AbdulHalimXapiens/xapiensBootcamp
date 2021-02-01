import React from "react";
import { Switch, Route } from "react-router-dom";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route path="/sign-in" component={Signin} />
            <Route path="/sign-up" component={Signup} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
