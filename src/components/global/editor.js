import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mapEditorDataToStore } from '../../store/actions/actions'
import { fetchEditorData, fetchRenderdModel } from '../utils/util'
import { useParams } from 'react-router-dom'
import {
  Container,
  Row,
  Tabs,
  Tab,
  Button,
  OverlayTrigger,
  Popover
} from 'react-bootstrap'
import {
  TopBar,
  Dp,
  CustomInput,
  DialogueBox
} from "../../reusable"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleArrowUp,
  faCrown,
  faTrashCan,
  faCirclePlay,
  faRetweet,
  faTrowel,
  faCircleArrowDown,
  faPlay
} from '@fortawesome/free-solid-svg-icons'
import "./global.css"

export function Editor() {
  const { project } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      dispatch(mapEditorDataToStore(await fetchEditorData(project)))
    })();
  }, [])

  const reduxData = useSelector((state) => state)

  const NavBarLinks = [
    { link: "plan-details", content: <FontAwesomeIcon icon={faCircleArrowUp} />, class: "text-success" },
    { link: "my-plan", content: <FontAwesomeIcon icon={faCrown} />, class: "text-secondary", title: "Basic Plan" }
  ]

  const [speechText, setspeechText] = useState("")
  const [speechTextErr, setspeechTextErr] = useState("")
  const [wordsCount, setWordCount] = useState(0)
  const [loader, setLoader] = useState(false)
  const [showFile, setFileShow] = useState(false);

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

  const render = async () => {
    setFileShow(true)
    const res = await fetchRenderdModel(project)
  }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3" className="text-danger">Under Construction</Popover.Header>
      <Popover.Body>
        <strong>Sorry</strong> for inconvenience, This button is under construction this will be implemented in coming versions
      </Popover.Body>
    </Popover>
  );

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
          <div className='col-12 border-2 border d-flex' style={{ height: "60vh" }}>
            <div className='col-7'>
              <div className='textToSpeech col-12 border rounded-3 shadow mt-3 p-3' style={{ height: "150px" }}>
                <div className='tts-top d-flex flex-row justify-content-between'>
                  <FontAwesomeIcon icon={faTrashCan} className="mx-2 text-secondary text-danger cardDelete p-2" onClick={() => console.log("delete")}></FontAwesomeIcon>
                  <p className='bg-info bg-opacity-50 p-1 rounded' style={{ fontSize: "12px" }}>{wordsCount + "/500"}</p>
                </div>
                <div className='d-flex flex-row justify-content-between align-items-center'>
                  <Dp height={20} width={20} className="mx-2" />
                  <CustomInput type="textarea" onChange={(event) => speechTextField(event)} value={speechText} err={speechTextErr} />
                  <FontAwesomeIcon icon={faCirclePlay} className="fs-4 text-success" />
                </div>
              </div>
              <div className='col-12 mt-3 d-flex flex-row align-items-center justify-content-around'>
                <audio width="100%" src={reduxData?.studio?.editor?.audio} controls />
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                  <Button variant='success'><FontAwesomeIcon icon={faRetweet} /> ReUpload</Button>
                </OverlayTrigger>
              </div>
            </div>
            <div className='videoPreviewPanel col-5 p-2 d-flex flex-column align-items-center'>
              <div className='video d-flex flex-column justify-content-between'>
                <button className="btn btn-dark mx-2 mb-2 mt-2 align-self-end" onClick={() => setFileShow(true)}>Show prev results</button>
                <video width="100%" src={reduxData?.studio?.editor?.video} frameBorder="0" controls ></video>
              </div>
              <div className='result-buttons d-flex flex-row justify-content-center mt-3'>
                <button className='btn btn-danger mx-2' onClick={render}><FontAwesomeIcon icon={faTrowel} className="mx-2" />Render</button>
                <DialogueBox
                  loader={loader}
                  show={showFile} onHide={() => setFileShow(false)}
                  hideFooter={false}
                  title={<><span><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon> Rendered Video</span></>}
                  body={
                    <>
                      <video width="100%" src={reduxData?.studio?.editor?.resultUrl} frameBorder="0" controls ></video>
                    </>
                  }
                />
                <button className='btn btn-success mx-2'><FontAwesomeIcon icon={faCircleArrowDown} className="mx-2" />Download</button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
