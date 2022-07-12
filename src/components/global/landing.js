import React, { useRef, useState } from 'react'
import { Navbar, Container, Nav, Row } from 'react-bootstrap'
import emailjs from 'emailjs-com';


export function Landing() {

  const form = useRef();

  const [sent, setEmailSent] = useState()

  const submit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_45q7ldk', 'template_zuhwdhi', form.current, 'McEIj3PIerE159oAT')
      .then((result) => {
        setEmailSent(true)
        console.log(result.text);
      }, (error) => {
        setEmailSent(false)
        console.log(error.text);
      });
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="images/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            NeuralSync AI
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Use">use cases</Nav.Link>
            <Nav.Link href="#How">How it works</Nav.Link>
            <Nav.Link href="#Team">Team</Nav.Link>
            <Nav.Link href="/landing/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{ height: '100vh' }} id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ height: '100vh' }} >
          <div className="carousel-item active" style={{ height: '100vh' }} >
            <img src="images/screen11.png" className="d-block w-100" alt="Banner - 1" style={{ height: '100vh' }} />
            <div className="carousel-caption d-none d-md-block" style={{ bottom: "32%", right: 0, left: "7.5%", textAlign: "start" }}>
              <h1 className='fw-bold' style={{ fontSize: "30px" }}>Lip Sync talking face <br />  videos with any audio in any language</h1>
              <p className='mt-5'>Lip sync in the wild videos translated in multiple <br/> languages to create better watching experience</p>
            </div>
          </div>
        </div>
      </div>
      <Container fluid className="mt-5">
        <Row>
          <div className="d-flex flex-column justify-content-between align-items-center fw-bold p-5 col-12">
            <h1>Create free AI Video</h1>
            <h5>Just type in your script in the below and we will send back your AI video</h5>
            {sent && <p className='text-danger'>{
              sent ? "Your requested Email sent successfully." : "Your requested email is not sent successfully Check the details correctly"
            }</p>}
            <div className='d-flex flex-row justify-content-center' style={{ width: "50%" }}>
              <form ref={form} onSubmit={submit} className="form-control d-flex flex-column">
                <label for="name" className='form-label'>Name</label>
                <input id="name" className='form-control' type="text" name="user_name" required/>
                <label for="email" className='form-label'>Email</label>
                <input id="email" className='form-control' type="email" name="user_email" required/>
                <label for="script" className='form-label'>Enter your script below</label>
                <textarea id="script" className='form-control' name="message" required/>
                <input className='btn btn-primary mt-3 mx-3 align-self-end' type="submit" value="Send" />
              </form>
            </div>
          </div>
          <div id="Home" className="col-12" >
            <img style={{ height: "100%", width: "100%" }} alt="banner5" src="images/videopage.png" />
          </div>

          <div id="Use" className="col-12" >
            <img style={{ height: "100%", width: "100%" }} alt="banner5" src="images/usecases.png" />
          </div>

          <div id="How" className="col-12">
            <img style={{ height: "100%", width: "100%" }} alt="banner5" src="images/howitworks1.png" />
          </div>

          <div id="How2" className="col-12">
            <img style={{ height: "100%", width: "100%" }} alt="banner5" src="images/howitworks2.png" />
          </div>

          <div id="team" className="col-12" >
            <img style={{ height: "100%", width: "100%" }} alt="banner5" src="images/team.png" />

          </div>

          <div id="contact" className="col-12" >
            <img style={{ height: "100%", width: "100%" }} alt="banner5" src="images/contact.png" />
          </div>
        </Row>
      </Container>
    </>
  )
}
