import React from 'react'
import { Nav, Navbar, Container, Dropdown } from 'react-bootstrap'

import "./reusable.css"
const logo = require("../../assets/logo.png")

export function TopBar(props) {
  const { DP, navLinks } = props

  const logout = () => {
    try {
      localStorage.removeItem("token")
      window.location.href = "/landing/login"
    } catch (err) {
      localStorage.removeItem("token")
      window.location.reload()
    }
  }
  return (
    <>
      <Navbar className="TopBar border-bottom border-dark" fixed="top" fluid="md">
        <Container fluid>
          <Navbar.Brand href="/landing" className="d-flex flex-row justify-content-between align-items-center">
            <img
              alt=""
              src={logo}
              height={40}
              width={40}
              className="d-inline-block align-top logo"
            />{' '}
            <span className='d-none d-sm-block mx-2 fs-3 fw-bold'>NeuralSyncAI</span>
          </Navbar.Brand>
          <Nav className="fw-bolder">
            {navLinks.map((item, index) => {
              return (
                <>
                  <Nav.Link
                    href={`/${item.link ? item.link : ""}`}
                    className={`mx-2 ${item.class ? item.class : ""}`}
                    key={index.toString()} title={item.title}>{item.content}
                  </Nav.Link>
                </>
              )
            })}
            <Dropdown drop='start'>
              <Dropdown.Toggle variant="light" id="dropdown-basic" className='bg-transparent border-0'>
                {DP}
              </Dropdown.Toggle>
              <Dropdown.Menu className="mt-5">
                <Dropdown.Header href="/myaccount" disabled>My Account</Dropdown.Header>
                <Dropdown.Item href="/myplans" disabled>My Plans</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="fw-bold text-danger" onClick={logout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}