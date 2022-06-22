import React from 'react'

import { Button, Modal } from 'react-bootstrap'

export function DialogueBox(props) {
  const { show, onHide, title, body, submit } = props
  const mod = { show, onHide }
  return (
    <>
      <Modal
        {...mod}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light">
          {body}
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button onClick={onHide} variant="danger">Close</Button>
          <Button onClick={submit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
