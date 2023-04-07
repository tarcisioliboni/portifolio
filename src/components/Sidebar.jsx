import React from 'react'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import "../styles/components/sidebar.sass"
import Avatar from '../img/tarcisioliboni.png'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Tarcísio Liboni" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar