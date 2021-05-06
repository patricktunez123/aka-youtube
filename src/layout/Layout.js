import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
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
          {children}
        </Container>
      </div>
    </>
  );
};

export default Layout;
