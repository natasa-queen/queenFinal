import React from 'react'
import Layout from '../../components/Layout'
import '../../assets/css/njega.scss'

import UslugeLista from "../../components/UslugeLista";



const Obrve = () => {
  return(
      <Layout>
        <div className="usluga-box">
          <section className="lista">
            <UslugeLista />
          </section>

          <section className="usluga-text">
            <h2>Obrve</h2>

            <p className='opis-usluge'>Korekcija obrva u kozmetičkom salonu je usluga koja pomaže u oblikovanju i definisanju obrva. Korekcija obrva uključuje uklanjanje viška dlačica s obrva i oblikovanje obrva prema željenoj veličini, obliku i stilu. Uz to, možete zatražiti i bojanje obrva kako biste poboljšali njihov izgled i naglasili njihovu prirodnu boju.</p>

            <h3>Henna obrve</h3>
            <p className='opis-usluge'>Henna obrve su prirodna alternativa bojanju obrva koja se sve više koristi u kozmetičkim salonima. Henna je biljni prah koji se dobiva od sušenih listova kane biljke. Kada se pomiješa s vodom ili drugom tekućinom, Henna stvara pastu koja se nanosi na obrve kako bi ih obojila.
              Henna obrve su popularne jer pružaju dugotrajnu boju koja traje do 6 sedmica, a koja prirodno blijedi s vremenom. Henna boja također daje obrvama dubinu i dimenziju, a mogu se koristiti i za popunjavanje i oblikovanje obrva.
              Henna boja dolazi u raznim nijansama, što znači da se može prilagoditi boji vašeg tena i prirodnim nijansama kose. Osim toga, Henna je prirodna boja koja ne sadrži štetne hemikalije, što je velika prednost za osobe s osjetljivom kožom ili alergijama na hemikalije. Henna obrve su jednostavne za održavanje i mogu se obnoviti bojanjem nakon što boja počne blijediti. </p>
          </section>
        </div>
      </Layout>
  )
}
export default Obrve
