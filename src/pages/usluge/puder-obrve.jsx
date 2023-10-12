import React from 'react'
import Layout from '../../components/Layout'
import '../../assets/css/njega.scss'

import UslugeLista from "../../components/UslugeLista";



const PuderObrve = () => {
  return(
      <Layout>
        <div className="usluga-box">
          <section className="lista">
            <UslugeLista />
          </section>

          <section className="usluga-text">
            <h2>Puder obrve</h2>

            <p className='opis-usluge'>"Puder obrve" je prilično popularna usluga u svijetu ljepote i estetike, posebno među onima koji žele postići prirodan i sofisticiran izgled obrva. Osim što pomaže u stvaranju savršenog oblika obrva, ova usluga može pomoći i u ispravljanju asimetrije obrva, prekrivanju ožiljaka u obrvama i davanju vizuelno punijih i definisanijih obrva, bez potrebe za svakodnevnim nanošenjem kozmetike</p>
          </section>
        </div>
      </Layout>
  )
}
export default PuderObrve
