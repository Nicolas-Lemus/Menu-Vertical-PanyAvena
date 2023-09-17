import React, {useState} from 'react'
import "./NavBar.css"
import logo from "../images/random.jpg"

const NavBar = () => {
  
  const [isOpen,setIsOpen] = useState(false);

  return (
    <header>
        <nav>
          <div className={`nav__walcome ${isOpen && "open"}`}>
            <h1>Lorem elit. molestiae ipsa ipsum? Voluptates tempore molestias ea maiores.</h1>
            <img src={logo} alt="#"/>
          </div>
          <div className={`nav__items ${isOpen && "open"}`}>
            <ul>
              <li><a href="/#">Home</a></li>
              <li><a href="/#">Proyectos</a></li>
              <li><a href="/#">Servicios</a></li>
              <li><a href="/#">Contacto</a></li>
            </ul>
          </div>
          <div className='nav__navbar'>
            <div className={`nav__logo ${isOpen && "open"}`}><img src={logo} alt="#" /></div>
            <div className={`nav__span ${isOpen && "open"}`}>
              <p>PYA</p>
              <div className={`nav__toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
              <span></span>
              <span id='med'></span>
              <span></span>
            </div>
            </div>
          </div>
        </nav>
    </header>
  )
}

export default NavBar
