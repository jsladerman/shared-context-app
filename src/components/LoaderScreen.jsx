import React, { useContext, useState } from 'react';
import StepsContext from '../StepsContext';
import Overlay from 'react-bootstrap/Overlay';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function LoaderScreen() {
    const { step, setStep, name, setName, APP_DATA } = useContext(StepsContext);
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(true);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
    const handleClose = () => setShow(false);
  
    return (
        <>
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header>
            <Modal.Title>Welcome!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>Loading....</div>
                <div class="d-flex align-items-center">
                    <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                </div>
                <Button variant="primary" onClick={handleClose}>
                    Let's Go!
                </Button>
            </Modal.Body>
        </Modal>
    </>
    );
  }
  
  export default LoaderScreen;