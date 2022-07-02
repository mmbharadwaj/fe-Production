import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSpinner
} from '@fortawesome/free-solid-svg-icons'

import { Button, Modal } from 'react-bootstrap'

export function DialogueBox(props) {
  const { show, onHide, title, body, submit, loader, hideFooter = true } = props
  const mod = { show, onHide }
  return (
    <>
      {loader === true && <>
        <div className="loader d-flex flex-container justify-content-center align-items-center">
          <FontAwesomeIcon icon={faSpinner} className="rotate fs-1 text-dark" />
        </div>
      </>}
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
        {hideFooter  && <Modal.Footer className="border-0">
          <Button onClick={onHide} variant="danger">Close</Button>
          <Button onClick={submit}>Submit</Button>
        </Modal.Footer>}
      </Modal>
    </>
  )
}
