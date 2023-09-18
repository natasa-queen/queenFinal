import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import {StaticImage} from "gatsby-plugin-image";
import '../assets/css/navigacija.scss'




const Navigacija = () => {

  const [show, setShow] = useState(false)


  const klik = () => {
    setShow(false)
    window.scrollTo(0, 0)

  }

    return (

        <nav>

            <button className="nav-button" onClick={() => setShow(!show)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

          <ul className={show ? `pokazati-meni` : ``}>
            <li><Link to='/' onClick={klik} activeClassName="aktivni-link" >Početna</Link></li>
            <li><Link to='/' onClick={klik} activeClassName="aktivni-link" >Cjenovnik</Link></li>
            <li><Link to='/rezervacija' onClick={klik} activeClassName="aktivni-link">Rezervacija</Link></li>
            <li><Link to='/' onClick={klik} activeClassName="aktivni-link">Edukacije</Link></li>
          </ul>

          <div className='logo'>
            <Link to="/">
              <StaticImage
                alt="Queen logo"
                src='../assets/images/logo-bg/logo3.png'
                // width="100"
              />
            </Link>
          </div>

          <button className='rezervacija-dugme' onClick={()=>{navigate("/rezervacija")}}>
            Rezerviši termin
          </button>

        </nav>
    )
}
export default Navigacija