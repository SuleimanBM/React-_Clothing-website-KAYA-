import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Home.css"
import { useState } from 'react'
function Homebar() {
  const bool = false
  const [activeLink1, setactiveLink1] = useState(bool)
  const ActiveLink1 = () => {
    setactiveLink1(!bool)
    }
  const DeactivatedLink1 = () => {
    setactiveLink1(bool)
  }
  const [activeLink2, setactiveLink2] = useState(bool)
  const ActiveLink2 = () => {
    setactiveLink2(!bool)
    }
  const DeactivatedLink2 = () => {
    setactiveLink2(bool)
  }
  const [activeLink3, setactiveLink3] = useState(bool)
  const ActiveLink3 = () => {
    setactiveLink3(!bool)
    }
  const DeactivatedLink3 = () => {
    setactiveLink3(bool)
  }
  const [activeLink4, setactiveLink4] = useState(bool)
  const ActiveLink4 = () => {
    setactiveLink4(!bool)
    }
  const DeactivatedLink4 = () => {
    setactiveLink4(bool)
  }
  const [activeLink, setactiveLink] = useState(bool)
  const ActiveLink = () => {
    setactiveLink(!bool)
    }
  const DeactivatedLink = () => {
    setactiveLink(bool)
  }
  return (
    <div className='Homebar' >
      <Link to="/" onFocus={ActiveLink1} onBlur={DeactivatedLink1}  id={activeLink1? "active" : "unactive"}><h3>Top deals</h3></Link>
      <Link to="/fuguFabric" onFocus={ActiveLink2} onBlur={DeactivatedLink2}  id={activeLink2? "active" : "unactive"}><h3>Fugu fabric</h3></Link>
      <Link to="/kente" onFocus={ActiveLink3} onBlur={DeactivatedLink3}  id={activeLink3? "active" : "unactive"}><h3>Kente</h3></Link>
      <Link to="/africanprint" onFocus={ActiveLink4} onBlur={DeactivatedLink4}  id={activeLink4? "active" : "unactive"}><h3>African Print</h3></Link>
      <Link to="/accessories" onFocus={ActiveLink} onBlur={DeactivatedLink}  id={activeLink? "active" : "unactive"}><h3>Accessories</h3></Link>
    </div>
  )
}

export default Homebar