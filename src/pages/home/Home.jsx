import { Container, Button, Row, Col } from "react-bootstrap";
import NavBarSection from "../../components/common/navbar/NavBarSection";
import Beacon from "../../components/common/beacon/Beacon";
import classes from "./Home.module.css";

function Home() {
  return (
    <section className={classes.bgcustomgray}>
      <Container fluid>
        <NavBarSection />
        <Beacon />
      </Container>
      <Container className="py-5">
        <Row>
          <Col xs={12}>
            <Button variant="dark">Dark</Button>
          </Col>
          <Col xs={12}>
            <Button variant="outline-dark">Dark</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
