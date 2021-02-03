import React from "react";
import { Switch, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Content from "./components/Content";
// import Footer from "./components/Footer";

import Signin from "./components/Day-11/Signin";
import Signup from "./components/Day-11/Signup";

function App() {
  return (
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          {/* <Navbar />
      <Content />
      <Footer /> */}
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
