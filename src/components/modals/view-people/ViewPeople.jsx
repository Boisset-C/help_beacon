import { useState } from "react";
import { Button, Modal, Image, Col } from "react-bootstrap";
import CloseIcon from "../../../assets/close.svg";
import AddPeople from "../add-people/AddPeople";

function ViewPeople(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        VIEW YOUR SUPPORT SYSTEM
      </Button>

      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter" className="fw-bold">
            YOUR SUPPORT SYSTEM
          </Modal.Title>
          <Button variant="link" onClick={handleClose}>
            <Image src={CloseIcon} alt="a close button" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Col className="d-grid gap-2">
            <AddPeople />
          </Col>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewPeople;
