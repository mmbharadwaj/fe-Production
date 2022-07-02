import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  Container,
  Row,
  Button
} from 'react-bootstrap'

import { CustomInput } from "../../reusable"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"

const logo = require("../../assets/logo.png")

export function Login() {

  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState("")
  const [pwd, setPwd] = useState("")
  const [pwdErr, setpwdErr] = useState("")
  const [serr, setSerr] = useState("")

  const userEmail = (event) => {
    let val = event.target.value
    if (val) {
      setEmailErr("")
      setEmail(val)
    }
    else {
      setEmailErr("*Please fill this field")
    }
  }

  const userPwd = (event) => {
    let val = event.target.value
    if (val) {
      setpwdErr("")
      setPwd(val)
    }
    else {
      setpwdErr("*Please fill this field")
    }
  }

  const submit = async () => {
    const emailRegex = RegExp(/^\S+@\S+\.\S+$/)
    if (email === "") {
      setEmailErr("*Please fill this field")
    } else {
      setEmailErr("")
    }
    if (pwd === "") {
      setpwdErr("*Please fill this field")
    }
    else {
      setpwdErr("")
    }
    if (email !== "" && pwd !== "") {
      if (emailRegex.test(email) === false) {
        setEmailErr("*Email is not Valid")
      }
      else {
        setEmailErr("")
      }
      if (emailErr === "" && pwdErr === "") {
        try {
          setSerr("")
          const url = process.env.REACT_APP_URL + "/login"
          const data = {email: email, password: pwd}
          const { data: res } = await axios.post(url, data)
          localStorage.setItem("token", res.data)
          window.location.href = "/studio"
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setSerr(error.response.data.Message)
          }
        }
      }
    }
  }


  return (
    <>
      <Container>
        <Row className="d-flex flex-row justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className='Login-box col-8 border shadow h-6 d-md-flex d-md-column'>
            <div className='part-1 col-12 col-md-6 border-bottom d-flex flex-column justify-content-center align-items-center'>
              <img className='rounded col-md-8 col-4 p-3' src={logo} alt='Neural Sync AI' />
              <h1 className='d-none d-md-block fw-bold'>Neural Sync AI</h1>
            </div>
            <div className='part-2 col-12 col-md-6 border-start d-flex flex-column justify-content-center p-2'>
              <h1 className='text-center'>Login</h1>
              <CustomInput type="email" label="Email" labelColor={"black"} value={email} err={emailErr} onChange={(event) => userEmail(event)} />
              <CustomInput type="password" label="Password" labelColor={"black"} value={pwd} err={pwdErr} onChange={(event) => userPwd((event))} />
              <p className="text-danger">{serr}</p>
              <Button className='mx-5 my-2' variant='light' onClick={() => submit()}>LOGIN</Button>
              <Button className='mx-5' variant='light'><FontAwesomeIcon icon={faGoogle} className="mx-2" />Login with Google</Button>
              <Link to="/landing/signup" className='text-end'>New to Neural Sync AI ?</Link>
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}
