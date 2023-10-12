import React from 'react'
import { Link } from 'gatsby'
import '../assets/css/usluge-lista.scss'



const UslugeLista = () => {
  return(
      <>
        <ul>
          <li><Link to='/usluge/njega-ruku' activeClassName='activeLink'>&rArr; Njega ruku</Link></li>
          <li><Link to='/usluge/njega-nogu' activeClassName='activeLink'>&rArr; Njega nogu</Link></li>
          <li><Link to='/usluge/depilacija' activeClassName='activeLink'>&rArr; Depilacija</Link></li>
          <li><Link to='/usluge/masaza' activeClassName='activeLink'>&rArr; Masaža</Link></li>
          <li><Link to='/usluge/obrve' activeClassName='activeLink'>&rArr; Obrve</Link></li>
          <li><Link to='/usluge/trepavice' activeClassName='activeLink'>&rArr; Trepavice</Link></li>
          <li><Link to='/usluge/lash-lift' activeClassName='activeLink'>&rArr; Lash/Brow lift</Link></li>
          <li><Link to='/usluge/puder-obrve' activeClassName='activeLink'>&rArr; Puder obrve</Link></li>
          <li><Link to='/usluge/sminkanje' activeClassName='activeLink'>&rArr; Šminkanje</Link></li>
        </ul>
      </>
  )
}
export default UslugeLista