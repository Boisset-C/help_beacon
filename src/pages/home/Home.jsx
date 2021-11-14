import { Container, Row, Col } from "react-bootstrap";
import NavBarSection from "../../components/common/navbar/NavBarSection";
import Beacon from "../../components/common/beacon/Beacon";
import AddPeople from "../../components/modals/add-people/AddPeople";
import ViewPeople from "../../components/modals/view-people/ViewPeople";

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
            <AddPeople />
            <ViewPeople />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
