import React from 'react'
import Layout from '../../components/Layout'
import '../../assets/css/njega.scss'

import UslugeLista from "../../components/UslugeLista";



const Masaza = () => {
  return(
      <Layout>
        <div className="usluga-box">
          <section className="lista">
            <UslugeLista />
          </section>

          <section className="usluga-text">
            <h2>Masaža</h2>

            <p className='opis-usluge'>Masaža je popularna usluga koja može pomoći u smanjenju napetosti mišića i opuštanju tijela. <br/>  Nakon masaže, klijenti se mogu osjećati opušteno, osvježeno i puni energije. Moguće su nuspojave, kao što su blagi bolovi u mišićima ili umor, ali to je uobičajeno i prolazi u roku od nekoliko sati. Masaža obično traje od 10 do 60 minuta, ovisno o željama klijenta i vrsti masaže koju odaberu.</p>
          </section>
        </div>
      </Layout>
  )
}
export default Masaza
