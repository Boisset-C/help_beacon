import { Row, Col, Form } from "react-bootstrap";
import classes from "./ListItem.module.css";

function ListItem(props) {
  return (
    <Form className="border-bottom border-3 border-dark mb-3">
      <Row className="align-items-center">
        <Col xs={2}>
          <Form.Check aria-label="option 1" />
        </Col>
        <Col xs={6}>
          <Form.Label className="bg-transparent border-0 fw-bold">
            {props.name}
          </Form.Label>
          <Form.Label className="text-secondary bg-transparent border-0">
            {props.phoneNumber}
          </Form.Label>
        </Col>
      </Row>
    </Form>
  );
}

export default ListItem;
