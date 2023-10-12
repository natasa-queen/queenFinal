import React from 'react'
import Layout from '../../components/Layout'
import '../../assets/css/njega.scss'

import UslugeLista from "../../components/UslugeLista";



const NjegaRuku = () => {
  return(
      <Layout>
        <div className="usluga-box">
          <section className="lista">
            <UslugeLista />
          </section>

          <section className="usluga-text">
            <h2>Njega ruku</h2>

            <p className='opis-usluge'>U našem kozmetičkom salonu, posebnu pažnju posvećujemo njezi ruku. Vaše ruke su vaša vizit-karta, zato se pobrinimo da izgledaju njegovano i zdravo. Naša usluga njege ruku uključuje piling za uklanjanje mrtvih stanica kože, hidrataciju kože kako bi se spriječilo isušivanje, njegu noktiju kao i masažu koja će osvježiti vaše umorne ruke. Koristimo samo visokokvalitetne proizvode kako bi vaše ruke bile zaštićene i zdrave.</p>

            <h3>QUEEN manikir</h3>
            <p className='opis-usluge'>Manikir sa pilingom i masažom je posebna usluga u kozmetičkom salonu koja pruža dodatnu njegu vašim rukama i noktima. Ova usluga uključuje potapanje u posebnu Spa kadicu sa hidro mjehurićima koji opuštaju ruku, zatim pažljivo čišćenje vaših noktiju, uklanjanje zanoktica i oblikovanje noktiju.
              Nakon toga, slijedi piling koji se nanosi na ruke kako bi se uklonile mrtve stanice kože i ostaci nečistoća. Piling se nježno masira po rukama kako bi se potaknula cirkulacija i poboljšao izgled kože. Nakon pilinga, slijedi hidratacija ruku koja će vašu kožu učiniti mekanom i glatkom.
              Nakon hidratacije, uslijedit će opuštajuća masaža koja će vam pomoći da se osjećate opušteno i osvježeno.</p>

            <h3>Geliranje prirodnog nokta</h3>
            <p className='opis-usluge'>Gel manikir je popularna metoda njegovanja noktiju koja se sastoji od nanošenja gela na prirodni nokat. Gel se nanosi u nekoliko slojeva i stvrdnjava se u UV lampi između svakog sloja, što rezultuje dugotrajnim i izdržljivim noktima. <br/> Gel manikir nudi mnoge prednosti u odnosu na tradicionalni manikir. Gel nokti su izdržljiviji i dugotrajniji, te se ne ljušte. Osim toga, gel manikir dolazi u mnogim bojama i uzorcima, pa možete odabrati boju ili uzorak koji najbolje odgovara vašem stilu i ličnosti.</p>

            <h3>Trajni lak</h3>
            <p className='opis-usluge'>Manikir sa trajnim lakom je savršena opcija za one koji žele dugotrajni lak za nokte koji neće oguliti ili izblijediti nakon samo nekoliko dana. Trajni lak je vrsta laka koja traje do tri sedmice, a ne zahtijeva često održavanje. <br/> Trajni lak dolazi u različitim bojama i nijansama, a također se može koristiti za stvaranje različitih uzoraka i dekoracija na noktima. Također može pomoći u jačanju prirodnog nokta, jer stvara zaštitni sloj koji ga štiti od pucanja i lomljenja.</p>
          </section>
        </div>
      </Layout>
  )
}
export default NjegaRuku
