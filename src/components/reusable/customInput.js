import React from 'react'

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

  return (
    <>
      {type !== 'textarea' ? (
        <>
          <div className={"form-item " + className}>
            <input id={id} type={type ? type : "text"} pattern={pattern} onChange={onChange} value={err === "" ? value : ""} required autoComplete="off" />
            <label htmlFor={id} style={{ color: labelColor }}>{label}</label>
          </div>
          <p className="text-start fw-bold m-2" style={{ fontSize: "10px", color: errColor ? errColor : "red" }}>{err}</p>
        </>) : (
        <>
          <textarea className='form-control' id={id} onChange={onChange} value={err === "" ? value : ""} />
          <p className="text-start fw-bold m-2" style={{ fontSize: "10px", color: errColor ? errColor : "red" }}>{err}</p>
        </>)}
    </>
  )
}
