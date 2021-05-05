import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HomeScreen from "./screens/HomeScreen";
import "./_app.scss";

function App() {
  const [toggleSideBar, UseToggleSideBar] = useState(false);

  const handleToggleSideBar = () => UseToggleSideBar((value) => !value);

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
    </>
  );
}

export default App;
