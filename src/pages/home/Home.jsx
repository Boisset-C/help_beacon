import { Container, Button, Row, Col, Image } from "react-bootstrap";
import NavBarSection from "../../components/common/navbar/NavBarSection";
import Beacon from "../../components/common/beacon/Beacon";
import PersonIcon from "../../assets/person-icon.svg";
import classes from "./Home.module.css";

function Home() {
  return (
    <section className={classes.bgcustomgray}>
      <Container className="h-25" fluid>
        <NavBarSection />
      </Container>
      <Container className="h-75">
        <Row className="h-75 align-items-center">
          <Col>
            <Beacon />
          </Col>
        </Row>
        <Row className="align-items-end h-25">
          <Col className="d-grid gap-2">
            <Button variant="dark">
              <Image className="px-2" src={PersonIcon} alt="person icon" />
              ADD YOUR PEOPLE
            </Button>
            <Button variant="outline-dark">VIEW YOUR SUPPORT SYSTEM</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
