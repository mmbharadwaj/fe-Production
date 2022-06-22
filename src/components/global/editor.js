import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Container,
  Row,
  Tabs,
  Tab,
  Button,
  Spinner
} from 'react-bootstrap'
import {
  TopBar,
  Dp,
  CustomInput
} from "../../reusable"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowUp,
  faCrown,
  faTrashCan,
  faCirclePlay
} from '@fortawesome/free-solid-svg-icons'
import "./global.css"

export function Editor(props) {
  const { project } = useParams()
  // const { } = props

  const NavBarLinks = [
    { link: "plan-details", content: <FontAwesomeIcon icon={faCircleArrowUp} />, class: "text-success" },
    { link: "my-plan", content: <FontAwesomeIcon icon={faCrown} />, class: "text-secondary", title: "Basic Plan" }
  ]

  const [speechText, setspeechText] = useState()
  const [speechTextErr, setspeechTextErr] = useState("")
  const [wordsCount, setWordCount] = useState(0)

  const speechTextField = (event) => {
    let val = event.target.value
    if (val && wordsCount < 501) {
      setspeechTextErr("")
      setspeechText(val)
      setWordCount((val.split(" ")).length)
    }
    else {
      setspeechTextErr(" ")
    }
  }


  return (
    <>
      <TopBar DP={<Dp />} navLinks={NavBarLinks} />
      <Container className='editorPage' fluid>
        <Row>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
          >
            <Tab className='bg-light' eventKey="home" title="Home">
              video/Audio
            </Tab>
            <Tab className='bg-light' eventKey="dummy" title="dummy">
              video/Audio
            </Tab>
          </Tabs>
          <div className='col-12 border-2 border d-flex' style={{height:"60vh"}}>
            <div className='textToSpeech col-7 border rounded-3 shadow mt-3 p-3' style={{height:"150px"}}>
              <div className='tts-top d-flex flex-row justify-content-between'>
                <FontAwesomeIcon icon={faTrashCan} className="mx-2 text-secondary text-danger cardDelete p-2" onClick={() => console.log("delete")}></FontAwesomeIcon>
                <p className='bg-info bg-opacity-50 p-1 rounded' style={{fontSize: "12px"}}>{wordsCount + "/500"}</p>
              </div>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <Dp height={20} width={20} className="mx-2" />
                <CustomInput type="textarea" onChange={(event) => speechTextField(event)} value={speechText} err={speechTextErr} />
                <FontAwesomeIcon icon={faCirclePlay} className="fs-4 text-success"/>
              </div>
            </div>
            <div className='videoPreviewPanel col-5 p-2 d-flex flex-column align-items-center'>
              <div className='video'>
                <video width="320" height="240" poster="/images/w3schools_green.jpg" controls>
                  <source src="movie.mp4" type="video/mp4" />
                  <source src="movie.ogg" type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className='result-buttons'>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
