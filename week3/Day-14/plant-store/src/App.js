import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>

      {/* <Blog /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
