import React from 'react'
import Layout from '../../components/Layout'
import '../../assets/css/njega.scss'

import UslugeLista from "../../components/UslugeLista";



const Trepavice = () => {
  return(
      <Layout>
        <div className="usluga-box">
          <section className="lista">
            <UslugeLista />
          </section>

          <section className="usluga-text">
            <h2>Trepavice</h2>

            <p className='opis-usluge'>Želite li zavodljiv i privlačan pogled koji će ostaviti bez daha sve koji vas vide? Isprobajte našu uslugu nadogradnje svilenih trepavica i postignite savršen izgled bez napora! <br/> Nadogradnja trepavica je kozmetička usluga koja omogućava da se prirodne trepavice produže i pojačaju. Ovaj postupak uključuje aplikaciju umjetnih trepavica na prirodne trepavice kako bi se stvorio puniji, duži i privlačniji izgled.</p>

            <h3>Ruski volumen</h3>
            <p className='opis-usluge'>Ruski volumen je postupak nadogradnje trepavica koji koristi posebne tanke trepavice kako bi se stvorio nevjerovatan izgled punih i gustih trepavica. Ovaj postupak je idealan za one koji žele postići punoću trepavica koja izgleda prirodno i puno gušće nego što bi se postiglo s drugim vrstama nadogradnje.
              Ova tehnika nadogradnje trepavica se izvodi tako što se na svaku prirodnu trepavicu nanosi grupa tankih trepavica u stilu "lepeze" ili "snopa". Trepavice su izuzetno tanke, što znači da se može primijeniti veći broj trepavica na svaku prirodnu trepavicu bez da izgleda teško ili umjetno.</p>
          </section>
        </div>
      </Layout>
  )
}
export default Trepavice
