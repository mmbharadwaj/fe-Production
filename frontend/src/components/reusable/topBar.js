import React from 'react'
import { Nav, Navbar, Container, Dropdown } from 'react-bootstrap'

import "./reusable.css"
const logo = require("C:/Users/ramak/OneDrive/Desktop/NuralSync/website Refactor/frontend/src/assets/logo.png")

export function TopBar(props) {
  const { DP, navLinks } = props
  return (
    <>
      <Navbar className="TopBar border-bottom border-dark" fixed="top" fluid="md">
        <Container fluid>
          <Navbar.Brand href="/home" className="d-flex flex-row justify-content-between align-items-center">
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
                    key={index} title={item.title}>{item.content}
                  </Nav.Link>
                </>
              )
            })}
            <Dropdown drop='start'>
              <Dropdown.Toggle variant="light" id="dropdown-basic" className='bg-transparent border-0'>
                {DP}
              </Dropdown.Toggle>
              <Dropdown.Menu className="mt-5">
                <Dropdown.Header href="#/action-1">My Account</Dropdown.Header>
                <Dropdown.Item href="#/action-2">My Plans</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3" className="fw-bold text-danger">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}