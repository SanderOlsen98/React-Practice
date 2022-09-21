import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/modal";
import { displayTime } from "../constants/modal";

function DisappearingModal() {
  const [open, setOpen] = useState(false);

  const [timeoutId, setTimeoutId] = useState(undefined);

  const handleClose = () => {
    setOpen(false);
    clearTimeout(timeoutId);
  };

  const handleOpen = () => {
    setOpen(true);
    setTimeoutId(setTimeout(handleClose, displayTime));
  };

  return (
    <>
      <Button variant="primary" onClick={handleOpen}>
        Open Modal
      </Button>

      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal 2 Lesson Task 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This will close after {displayTime / 1000} seconds.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DisappearingModal;
