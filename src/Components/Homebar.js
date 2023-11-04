import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Home.css"
import { useState } from 'react'
function Homebar() {
  const bool = true
  const bool1 = true
  const bool2 = true
  const bool3 = true
  const bool4 = true
  const [activeLink, setactiveLink] = useState(bool)
  const ActiveLink = () => {
    setactiveLink(bool);
    setactiveLink1(!bool1);setactiveLink2(!bool2)
    setactiveLink4(!bool3);setactiveLink3(!bool4)
    }

  const [activeLink1, setactiveLink1] = useState(bool1)
  const ActiveLink1 = () => {
    setactiveLink(!bool);setactiveLink1(bool1);
    setactiveLink2(!bool2);setactiveLink3(!bool3);
    setactiveLink4(!bool4)
    }

  const [activeLink2, setactiveLink2] = useState(bool2)
  const ActiveLink2 = () => {
    setactiveLink(!bool);setactiveLink1(!bool1);
    setactiveLink2(bool2);setactiveLink3(!bool3);
    setactiveLink4(!bool4)
    }

  const [activeLink3, setactiveLink3] = useState(bool3)
  const ActiveLink3 = () => {
    setactiveLink(!bool);setactiveLink1(!bool1);
    setactiveLink2(!bool2);setactiveLink3(bool3);
    setactiveLink4(!bool4)
    }

  const [activeLink4, setactiveLink4] = useState(bool4)
  const ActiveLink4 = () => {
    setactiveLink(!bool);setactiveLink1(!bool1);
    setactiveLink2(!bool2);setactiveLink3(!bool3);
    setactiveLink4(bool4)
    }
 
  return (
    <div className='Homebar' >
      <Link to="/" onClick={ActiveLink}   id={activeLink? "active" : "unactive"}><h3>Top deals</h3></Link>
      <Link to="/fuguFabric" onClick={ActiveLink1}   id={activeLink1? "active" : "unactive"}><h3>Fugu</h3></Link>
      <Link to="/kente" onClick={ActiveLink2}   id={activeLink2? "active" : "unactive"}><h3>Kente</h3></Link>
      <Link to="/africanprint" onClick={ActiveLink3}   id={activeLink3? "active" : "unactive"}><h3>African Print</h3></Link>
      <Link to="/accessories" onClick={ActiveLink4}  id={activeLink4? "active" : "unactive"}><h3>Accessories</h3></Link>
    </div>
  )
}

export default Homebar