import React, { useState } from 'react'
import {
  Container,
  Row,
  Button,
  Breadcrumb,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowUp,
  faCrown,
  faRectangleList,
  faGrip,
  faHouseChimney,
} from '@fortawesome/free-solid-svg-icons'
//Importing Reusable components
import {
  TopBar,
  SideBar,
  CardBox,
  Dp
} from "../../reusable"
import "./global.css"

export function Studio() {

  const NavBarLinks = [
    { link: "plan-details", content: <FontAwesomeIcon icon={faCircleArrowUp} />, class: "text-success" },
    { link: "my-plan", content: <FontAwesomeIcon icon={faCrown} />, class: "text-secondary", title: "Basic Plan" }
  ]

  const [studioView, setStudioView] = useState('col-12 col-md-4 col-lg-3')
  const [cardView, setCardView] = useState('170px')

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
          <div className='col-12 d-flex flex-row justify-content-between p-3 border-bottom mb-3'>
            <div className='d-flex flex-row justify-content-between'>
              <div className='bread-Crumbs'>
                <Breadcrumb>
                  <Breadcrumb.Item href="/studio" active={false} label="Home"><FontAwesomeIcon icon={faHouseChimney} className="mx-2 text-secondary"></FontAwesomeIcon> </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
            <div className='d-flex flex-row justify-content-between'>
              <Button variant='secondary mx-2' onClick={() => gridChange('col-12 col-md-4 col-lg-3', '170px')} title="Gid View"><FontAwesomeIcon icon={faGrip} /></Button>
              <Button variant='secondary' onClick={() => gridChange('col-12', '50px')} title="List View"><FontAwesomeIcon icon={faRectangleList} /></Button>
            </div>
          </div>
          <CardBox studioView={studioView} cardView={cardView} cardType="default" title="Create a new Project" />
          <CardBox studioView={studioView} cardView={cardView} title="srk" />
          <CardBox studioView={studioView} cardView={cardView} title="brk" />
        </Row>
      </Container>
    </>
  )
}
