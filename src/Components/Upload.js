import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function UploadB() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Upload
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload your video here!</Modal.Title>
        </Modal.Header>
        <form
          action="http://192.168.43.216:8000/videos"
          enctype="multipart/form-data"
          method="POST"
        >
          <Modal.Body>
            <input type="file" name="myFile" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <input type="submit" name="upload file..." />
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default UploadB;
