import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faUserGear, faFolderOpen, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from './icon'
import "./reusable.css"

export function SideBar() {

  const [sideWidth, setSideWidth] = useState("10%")

  const changeSide = () => {
    console.log(sideWidth)
    sideWidth === "10%" ? setSideWidth("5%") : setSideWidth("10%")
  }

  return (
    <>
      <div className='sideBar d-flex flex-column justify-content-start align-items-center border-end border-1 border-dark pt-3 fixed-top' style={{ width: sideWidth }}>
        <FontAwesomeIcon icon={faBars} onClick={() => changeSide()} className={`d-none d-md-block ${sideWidth === "10%" ? "align-self-md-end mx-3" : "align-self-center mx-3"}`} />
        <Link to="/my-projects" className='SidebarLinks p-3 d-md-flex align-items-center' title='My Projects'><Icon iconName={faFolderOpen} /> <span className={sideWidth === "10%" ? 'd-none d-md-block mx-1' : 'd-none mx-1'}>My Projects</span></Link>
        <Link to="/account-details" className='SidebarLinks p-3 d-md-flex align-items-center' title='My Account'><Icon iconName={faUserGear} /><span className={sideWidth === "10%" ? 'd-none d-md-block mx-1' : 'd-none mx-1'}>My Account</span></Link>
      </div>
    </>
  )
}
