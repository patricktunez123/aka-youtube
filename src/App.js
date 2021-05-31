import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Login from "./screens/Login";
import Page404 from "./screens/Page404";
import HomeScreen from "./screens/HomeScreen";
import WatchScreen from "./screens/WatchScreen";
import SearchScreen from "./screens/SearchScreen";
import Subscriptions from "./screens/Subscriptions";
import ChannelScreen from "./screens/ChannelScreen";
import InfoScreen from "./screens/InfoScreen";
import "./_app.scss";

function App() {
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
        <Layout>
          <Subscriptions />
        </Layout>
      </Route>

      <Route path="/channel/:channelId">
        <Layout>
          <ChannelScreen />
        </Layout>
      </Route>

      <Route path="/login" exact>
        <Login />
      </Route>

      <Route path="/oops">
        <Layout>
          <InfoScreen />
        </Layout>
      </Route>

      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
}

export default App;
