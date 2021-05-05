import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HomeScreen from "./screens/HomeScreen";
// import Login from "./screens/Login";
import "./_app.scss";

function App() {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const handleToggleSideBar = () => setToggleSideBar((value) => !value);

  return (
    <>
      <Header handleToggleSideBar={handleToggleSideBar} />
      <div className="app__container">
        <SideBar
          toggleSideBar={toggleSideBar}
          handleToggleSideBar={handleToggleSideBar}
        />
        <Container fluid className="app__main">
          <HomeScreen />
        </Container>
      </div>
      {/* <Login /> */}
    </>
  );
}

export default App;
