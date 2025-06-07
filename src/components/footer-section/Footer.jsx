import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import './footer.css'


const footer = () => {
  return (
   <footer className="footer">
      <p>© 2025 Dikshita Pawar. All rights reserved.</p>
      <div className="footer_icons">
        <a href="https://www.linkedin.com/in/dikshita-pawar/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/dikshita168" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:dikshita.pawar.dev@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  )
}

export default footer
