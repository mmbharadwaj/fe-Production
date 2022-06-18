import React, { useState } from 'react'
import {
  Container,
  Row,
  Button,
  Breadcrumb,
  Modal
} from 'react-bootstrap'
import {
  faCircleArrowUp,
  faCrown,
  faRectangleList,
  faGrip,
  faFolderPlus,
  faFileCirclePlus
} from '@fortawesome/free-solid-svg-icons'
//Importing Reusable components
import { TopBar, SideBar, Icon, CardBox } from "../../reusable"
import "./global.css"

const Dp = (props) => {
  const { link } = props
  return (
    <>
      <img
        alt=""
        src={link}
        height={40}
        width={40}
        className="rounded-circle"
      />
    </>
  )
}

export function Studio() {

  const NavBarLinks = [
    { link: "plan-details", content: <Icon iconName={faCircleArrowUp} />, class: "text-success" },
    { link: "my-plan", content: <Icon iconName={faCrown} />, class: "text-secondary", title: "Basic Plan" }
  ]

  const [studioView, setStudioView] = useState('col-12 col-md-4 col-lg-3')
  const [cardView, setCardView] = useState('170px')
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const gridChange = (groupView, cardView) => {
    setStudioView(groupView)
    setCardView(cardView)
  }

  return (
    <>
      <TopBar DP={<Dp />} navLinks={NavBarLinks} />
      <SideBar />
      <Container className='studioGroup mt-5'>
        <Row>
          <Button variant="primary" onClick={() => setShow(true)}>
            Launch demo modal
          </Button>
          <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={() => setShow(false)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <div className='col-12 d-flex flex-row justify-content-between p-3 border-bottom mb-3'>
            <div className='d-flex flex-row justify-content-between'>
              <Button variant='secondary mx-2'><Icon iconName={faFileCirclePlus} /></Button>
              <Button variant='secondary'><Icon iconName={faFolderPlus} /></Button>
            </div>
            <div className='d-flex flex-row justify-content-between'>
              <Button variant='secondary mx-2' onClick={() => gridChange('col-12 col-md-4 col-lg-3', '170px')} title="Gid View"><Icon iconName={faGrip} /></Button>
              <Button variant='secondary' onClick={() => gridChange('col-12', '50px')} title="List View"><Icon iconName={faRectangleList} /></Button>
            </div>
          </div>
          <div className='bread-Crumbs'>
            <Breadcrumb>
              <Breadcrumb.Item href="/studio" active={false}>Home</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <CardBox studioView={studioView} cardView={cardView} title="Dummy" description="Nothing to worry" />
        </Row>
      </Container>
    </>
  )
}
