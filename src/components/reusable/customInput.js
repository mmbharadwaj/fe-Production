import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons'

/**
 * @param {String} label Name of input element.
 * @param {String} type Type of input.
 * @param {function} onChange You can add event handler function to this.
 * @param {String} value you can add default value for this.
 * @param {String} err you can add error message for the input field.
 * @param {String} labelColor you can change color of label or by default it will accept theme color
 * @param {String} errColor you can change color of error or else by default it will red.
 */
export function CustomInput(props) {
  const { id, label, type, onChange, value, err = "", labelColor, errColor, pattern, className, height } = props;
  const [changeType, setChange] = useState(type)
  const [icon, setIcon] = useState(faEyeSlash)

  const pwdOpen = () => {
    if (icon === faEyeSlash) {
      setIcon(faEye)
      setChange("text")
    }
    else {
      setIcon(faEyeSlash)
      setChange(type)
    }
  }

  return (
    <>
      {type !== 'textarea' ? (
        <>
          <div className={"form-item d-flex flex-row" + className}>
            <input id={id} type={changeType ? changeType : "text"} pattern={pattern} onChange={onChange} value={err === "" ? value : ""} required autoComplete="off" />
            <label htmlFor={id} style={{ color: labelColor }}>{label}</label>
            {type === "password" ? (
              <>
                <FontAwesomeIcon icon={icon} className="mt-2 mx-2" onClick={pwdOpen} />
              </>) : (<>
              </>
            )}
          </div>
          <p className="text-start fw-bold p-1" style={{ fontSize: "10px", color: errColor ? errColor : "red" }}>{err}</p>
        </>) : (
        <>
          <textarea className='form-control' id={id} onChange={onChange} value={err === "" ? value : ""} />
          <p className="text-start fw-bold p-1" style={{ fontSize: "10px", color: errColor ? errColor : "red" }}>{err}</p>
        </>)}
    </>
  )
}
