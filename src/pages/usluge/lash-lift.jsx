import React from 'react'
import Layout from '../../components/Layout'
import '../../assets/css/njega.scss'

import UslugeLista from "../../components/UslugeLista";



const LashLift = () => {
  return(
      <Layout>
        <div className="usluga-box">
          <section className="lista">
            <UslugeLista />
          </section>

          <section className="usluga-text">
            <h2>Lash / Brow lift</h2>

            <h3>Lash lift</h3>
            <p className='opis-usluge'>Lash lift je kozmetička usluga koja se obavlja na trepavicama, a ima za cilj podići i naglasiti prirodni izgled trepavica bez upotrebe umjetnih ekstenzija. Postupak se izvodi pomoću specijalne tehnike koja uvija trepavice i drži ih u tom položaju dok se nanosi poseban sastav koji ih održava u tom položaju. <br/> Ova usluga je idealna za osobe koje imaju ravne ili spuštene trepavice, a žele postići prirodan izgled trepavica bez upotrebe umjetnih ekstenzija. Trepavice nakon lash lifta izgledaju punije, duže i naglašenije, a ujedno i izgledaju prirodnije nego nakon postavljanja ekstenzija.</p>

            <h3>Brow lift</h3>
            <p className='opis-usluge'>Brow lift je kozmetička usluga koja se koristi za podizanje i naglašavanje obrva. Postupak obuhvata korištenje tehnika kojima se podiže položaj obrva, čime se stvara mladenački i pomlađujući efekt. <br/> Postupak se može obaviti različitim metodama, poput korištenja kozmetičkih proizvoda poput gelova ili voskova. </p>
          </section>
        </div>
      </Layout>
  )
}
export default LashLift
