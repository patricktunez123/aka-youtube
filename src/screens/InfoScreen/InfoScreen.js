import React from "react";
import { Container } from "react-bootstrap";
import "./_infoScreen.scss";
import oops from "../../files/images/oops.png";

const InfoScreen = () => {
  return (
    <Container>
      <div className="infoScreen">
        <img src={oops} alt="" />
        <h4>
          Sorry! for that menu you just clicked, the developer's still working
          on it.
        </h4>
        <p>
          The developer is still working on the menu you just clicked! with this
          <br />
          app you can currently watch videos, search for videos, comment on them
          <br />
          and see the channels you subscribed to.
        </p>
        <h5>Menus that are working currently:</h5>
        <ul>
          <li>Home</li>
          <li>Subscriptions</li>
          <li>Logout</li>
          <li>About me</li>
          <li>Contact me</li>
          <li>Source code</li>
        </ul>
      </div>
    </Container>
  );
};

export default InfoScreen;
