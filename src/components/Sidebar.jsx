import React from 'react'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'
import "../styles/components/sidebar.sass"
import Avatar from '../img/tarcisioliboni.jpg'

const curriculo = 'https://drive.google.com/file/d/1kY9YhKek8in6w5Vy9bHZOIJZyUKAPZwA/view?usp=share_link';
const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Tarcísio Liboni" />
      <h1 className="name">Tarcísio Liboni</h1>
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={curriculo} className="btn" target="_blank">Download currículo</a>
    </aside>
  )
}

export default Sidebar