import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function Landing() {
  return (
    <>
      <section class="showcase">
        <div class="video-container">
          <video src="https://traversymedia.com/downloads/video.mov" autoplay muted loop></video>
        </div>
        <div class="content">
          <h1>NEURALSYNC AI</h1>
          <h3>Discover the new way of making videos</h3>
          <Link to="#about" class="btn">Read More</Link>
        </div>
      </section>

      <section id="about">
        <h1>About</h1>
        <p>
          This is a landing page with a full screen video background. Feel free to
          use this landing page in your projects. keep adding sections, change the
          video, content , etc
        </p>

        <h2>Follow Me On Social Media</h2>

        <div class="social">
          <Link to="https://twitter.com/traversymedia" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link>
          <Link to="https://facebook.com/traversymedia" target="_blank"> <FontAwesomeIcon icon={faFacebook} /></Link>
          <Link to="https://github.com/bradtraversy" target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
          <Link to="https://www.linkedin.com/in/bradtraversy" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link>
        </div>
      </section>
    </>
  )
}
