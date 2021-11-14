import { InputGroup, Row, Col } from "react-bootstrap";
import classes from "./ListItem.module.css";

function ListItem(props) {
  return (
    <InputGroup className="border-bottom border-3 border-dark mb-3">
      <InputGroup.Checkbox
        className={classes.customcheck}
        aria-label="Checkbox for following text input"
      />
      <Row>
        <Col>
          <InputGroup.Text>{props.name}</InputGroup.Text>
        </Col>
        <Col>
          <InputGroup.Text>{props.phoneNumber}</InputGroup.Text>
        </Col>
      </Row>
    </InputGroup>
  );
}

export default ListItem;
