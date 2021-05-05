import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../components/CategoriesBar";
import Video from "../../components/Video";
import "./_homeScreen.scss";

const HomeScreen = () => {
  return (
    <Container>
      <CategoriesBar />
      <Row className="screen">
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
