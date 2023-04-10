import React from 'react'

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import '../styles/components/socialnetworks.sass'

const socialNetworks = [
    { name: "linkedin", link: "https://www.linkedin.com/in/tarcisioliboni/", icon: <FaLinkedin /> },
    { name: "github", link: "https://github.com/tarcisioliboni", icon: <FaGithub /> },
    { name: "instagram", link: "https://www.instagram.com/tarcisioliboni/", icon: <FaInstagram /> }
]

function SocialNetworks() {
  return (
    <section id="social-networks">
        { socialNetworks.map((network) => (
            <a href={network.link} className="social-btn" id={network.name} target="_blank" key={network.name}>{network.icon}
            </a>
        ))}
    </section>
  )
}

export default SocialNetworks