import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./components/Page/Home";
import Produk from "./components/Page/Produk";
import Blog from "./components/Page/Blog";
import About from "./components/Page/About";
import Contact from "./components/Page/Contact";
import Signup from "./components/Auth/Signup";
import Signin from "./components/Auth/Signin";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || null);
    const token = JSON.parse(localStorage.getItem("token") || null);

    if (user && token) {
      dispatch({
        type: "LOGIN",
        payload: {
          user,
          token,
        },
      });
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Switch>
        <div>
          {!state.isAuthenticated ? (
            <>
              <Route exact path="/" component={Signin} />
              <Route path="/sign-in" component={Signin} />
              <Route path="/sign-up" component={Signup} />
            </>
          ) : (
            <>
              <Navbar />
              <Route exact path="/" component={Header} />
              <Route path="/home" component={Home} />
              <Route path="/product" component={Produk} />
              <Route path="/blog" component={Blog} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              {/* <Footer /> */}
            </>
          )}
        </div>
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
