import React from 'react'
import Layout from '../../components/Layout'
import '../../assets/css/njega.scss'

import UslugeLista from "../../components/UslugeLista";



const Depilacija = () => {
  return(
      <Layout>
        <div className="usluga-box">
          <section className="lista">
            <UslugeLista />
          </section>

          <section className="usluga-text">
            <h2>Depilacija</h2>

            <p className='opis-usluge'>Depilacija toplim voskom jedna je od najpopularnijih metoda depilacije u kozmetičkim salonima. Ova metoda uklanja dlačice s korijenom, što znači da su rezultati dugotrajniji u usporedbi s drugim metodama uklanjanja dlačica poput brijanja. <br/>
              Kod depilacije toplim voskom, zagrijani vosak nanosi se na kožu i zatim se uklanja brzim pokretom u suprotnom smjeru rasta dlačica. Ovaj postupak može biti neugodan, ali kozmetičari će se pobrinuti da se osjećate što ugodnije.
              Prednosti depilacije toplim voskom uključuju dugotrajne rezultate, brzinu tretmana i manju mogućnost urastanja dlačica u kožu.</p>
          </section>
        </div>
      </Layout>
  )
}
export default Depilacija
