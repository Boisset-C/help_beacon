import { InputGroup } from "react-bootstrap";

function ListItem(props) {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
      <InputGroup.Text>{props.name}</InputGroup.Text>
      <InputGroup.Text>{props.phoneNumber}</InputGroup.Text>
    </InputGroup>
  );
}

export default ListItem;
