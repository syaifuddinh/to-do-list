import React, { useState } from 'react';

import { Modal, Button } from "react-bootstrap";

function App({ title, children, trigger, onSubmit, onOpen }) {
  const [isShow, switchShow] = useState(false)

  const handleClose = () => {
        switchShow(false);
  }

  const handleSubmit = () => {
    if(onSubmit) {
        onSubmit();
    }
    handleClose();
  }

  return (
    <>
        <div onClick={() => {
            switchShow(true)
            if(onOpen) {
                onOpen();
            }
        }}>
            { trigger }
        </div>
        <Modal
            show={isShow}
            onClose={handleClose}
        >
              <Modal.Header>
                <Modal.Title>
                    { title }
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                { children }
              </Modal.Body>

              <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={handleClose}
                >
                    Tutup
                </Button>
                <Button
                    variant="primary"
                    onClick={(handleSubmit)}
                >
                    Simpan
                </Button>
              </Modal.Footer>
        </Modal>
    </>
  );
}

export default App;
