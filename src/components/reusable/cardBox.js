import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTrashCan,
  faMusic,
  faVideo,
  faCirclePlus,
  faCircleArrowUp
} from '@fortawesome/free-solid-svg-icons'
import { CustomInput, DialogueBox } from "../../reusable"

export function CardBox(props) {
  const { studioView, cardView, title, description, cardType, cardId } = props

  const [showFile, setFileShow] = useState(false);
  const [file, setFile] = useState()
  const [fileErr, setFileErr] = useState("")
  const [audioFile, setAudioFile] = useState()
  const [videoFile, setVideoFile] = useState()

  const fileNameField = (event) => {
    let val = event.target.value
    if (val) {
      setFileErr("")
      setFile(val)
    }
    else {
      setFileErr("*Please fill this field")
    }
  }

  const fileSubmit = (event) => {
    console.log(event)
  }

  return (
    <>
      <div className={`p1 ${studioView}`}>
        <div className="card studioCard shadow border-light">
          <div className='card-header bg-transparent d-flex flex-row justify-content-between align-items-center'>
            <h5 className='card-title d-flex flex-row justify-content-between fs-6'>
              {title}
            </h5>
            {cardType !== "default" ? (<FontAwesomeIcon icon={faTrashCan} className="mx-2 text-secondary text-danger cardDelete p-2" onClick={() => console.log("delete")}></FontAwesomeIcon>) : (<></>)}
          </div>
          <div className='card-body'>
            <div className='card-text p-1 d-flex flex-row align-items-center justify-content-center' style={{ height: cardView }}>
              {cardType === "default" ? (
                <>
                  <FontAwesomeIcon className='pointer text-primary fs-3' onClick={() => setFileShow(true)} icon={faCirclePlus} />
                  <DialogueBox show={showFile} onHide={() => setFileShow(false)} submit={(event) => fileSubmit(event)} title={<><span><FontAwesomeIcon icon={faCircleArrowUp}></FontAwesomeIcon> Start with uploading Video</span></>} body={
                    <>
                      <CustomInput type={"text"} label={"File Name"} labelColor={"black"} value={file} onChange={(event) => fileNameField(event)} err={fileErr} className="mt-3 mb-3" />
                      <div className="d-flex flex-row align-items-center text-success">
                        <label htmlFor="AudioFile"><FontAwesomeIcon icon={faMusic} /></label>
                        <input type="file" id="AudioFile" className="form-control mt-3 mb-3 mx-3" accept='.mp3,.m4a,audio/*' placeholder='Choose a video file' />
                      </div>
                      <div className="d-flex flex-row align-items-center text-success">
                        <label htmlFor="AudioFile"><FontAwesomeIcon icon={faVideo} /></label>
                        <input type="file" id="videoFile" className="form-control mt-3 mb-3 mx-3" accept='video/mp4,video/x-m4v,video/*' placeholder='Choose a audio file' />
                      </div>
                    </>
                  } />
                </>
              ) : (
                <>
                  {description}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
