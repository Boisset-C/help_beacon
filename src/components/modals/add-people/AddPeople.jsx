import { useState, useEffect } from "react";
import { Button, Modal, Image } from "react-bootstrap";
import PersonIcon from "../../../assets/person-icon.svg";
import CloseIcon from "../../../assets/close.svg";
import ListItem from "../../../components/common/ui/list/ListItem";

function AddPeople(props) {
  const [show, setShow] = useState(false);
  const [contacts, setContact] = useState([
    {
      name: "Empty",
      phoneNumber: "(666) 666-6666",
    },
  ]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("public/dummydata.json", {
      method: "GET",
    })
      .then((r) => {
        return r.json();
      })
      .then((j) => {
        console.log(j);
        setContact(j.data);
      });
  }, []);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <Image className="px-2" src={PersonIcon} alt="person icon" />
        ADD YOUR PEOPLE
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
            ADD YOUR PEOPLE
          </Modal.Title>
          <Button variant="link" onClick={handleClose}>
            <Image src={CloseIcon} alt="a close button" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {contacts.map((c) => (
              <li key={c.id}>
                <ListItem name={c.name} phoneNumber={c.phoneNumber} />
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="dark">ADD</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPeople;
