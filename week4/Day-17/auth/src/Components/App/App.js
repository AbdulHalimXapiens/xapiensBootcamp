import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import "./App.css";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import useToken from "./useToken";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  const logout = () => {
    /* eslint-disable */
    const toLogout = confirm("Are you sure to logout ?");
    /* eslint-enable */
    if (toLogout) {
      localStorage.clear();
    }
  };

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
