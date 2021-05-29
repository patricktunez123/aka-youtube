import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./layout";
import Login from "./screens/Login";
import Page404 from "./screens/Page404";
import HomeScreen from "./screens/HomeScreen";
import WatchScreen from "./screens/WatchScreen";
import SearchScreen from "./screens/SearchScreen";
import "./_app.scss";

function App() {
  const history = useHistory();
  const loading = useSelector((state) => state?.auth?.loading);
  const accessToken = useSelector((state) => state?.auth?.accessToken);

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/login");
    }
  }, [history, loading, accessToken]);

  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path="/search/:query" exact>
        <Layout>
          <SearchScreen />
        </Layout>
      </Route>

      <Route path="/watch/:id">
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>
      <Route path="/feed/subscriptions">
        <Layout>subdd</Layout>
      </Route>
      <Route path="/channel/:id">
        <Layout>
          <div>thsi isn t cnalle</div>
        </Layout>
      </Route>

      <Route path="/login" exact>
        <Login />
      </Route>

      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
}

export default App;
