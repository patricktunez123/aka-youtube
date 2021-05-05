import { Container } from "react-bootstrap";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HomeScreen from "./screens/HomeScreen";
import "./_app.scss";

function App() {
  return (
    <>
      <Header />
      <div className="app__container border border-info">
        <SideBar />
        <Container fluid className="app__main border border-danger">
          <HomeScreen />
        </Container>
      </div>
    </>
  );
}

export default App;
