import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Login from "./screens/Login";
import Page404 from "./screens/Page404";
import HomeScreen from "./screens/HomeScreen";
import "./_app.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>

        <Route path="/search" exact>
          <Layout>
            <h1>Search here</h1>
          </Layout>
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route>
          <Page404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
