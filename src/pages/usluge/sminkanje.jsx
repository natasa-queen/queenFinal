import React from 'react'
import Layout from '../../components/Layout'
import '../../assets/css/njega.scss'

import UslugeLista from "../../components/UslugeLista";



const Sminkanje = () => {
  return(
      <Layout>
        <div className="usluga-box">
          <section className="lista">
            <UslugeLista />
          </section>

          <section className="usluga-text">
            <h2>Šminkanje</h2>

            <p className='opis-usluge'>Želite li izgledati savršeno i zanosno za posebnu priliku ili samo želite osvježiti svoj svakodnevni izgled?
              Nudimo šminkanje za sve prilike - od vjenčanja, maturalnih zabava, rođendanskih proslava do raznih društvenih događaja.
              Koristimo najkvalitetnije proizvode za šminkanje kako bismo vam osigurali dugotrajni izgled tijekom cijelog događaja.
              Uživajte u potpunom iskustvu šminkanja kod nas i osjećajte se samopouzdano i predivno za svaku priliku.</p>
          </section>
        </div>
      </Layout>
  )
}
export default Sminkanje
