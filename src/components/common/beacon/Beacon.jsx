import { Container, Row, Col, Image } from "react-bootstrap";
import BeaconDisabled from "../../../assets/gray-btn.svg";

function Beacon() {
  return (
    <Container className="">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Image
            src={BeaconDisabled}
            className="text-center"
            alt="beacon button"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Beacon;
