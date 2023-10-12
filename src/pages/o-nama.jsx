import React from 'react'
import Layout from '../components/Layout'

import '../assets/css/o-nama.scss'

import Slider from '../components/Carousel'
import {graphql} from "gatsby";


const Onama = ({data}) => {

    const images = data.allFile.nodes

    return(
        <Layout>
          <section className='sekcija-o-nama'>
            <h2>O nama</h2>

            <div className='text'>
              <p>Naša priča započela je još 2018. godine kada smo odlučili otvoriti kozmetički salon koji će se istaknuti po vrhunskoj usluzi i kvaliteti proizvoda. Krenuli smo s malim koracima, ali smo imali veliku strast i viziju. </p>

              <p>U početku smo se susreli s mnogim izazovima, ali smo se trudili da se prilagodimo i pronađemo rješenja. Odlučili smo se usredotočiti na kvalitetu naših usluga i pažljivo odabrati proizvode koje koristimo u salonu.</p>

              <p>Naš rad je ubrzo prepoznat i naši klijenti su bili zadovoljni našim radom i ubrzo smo postali prepoznaatljivi po kvalitetu usluge. Kako smo rasli i razvijali se, odlučili smo proširiti svoju ponudu usluga i uvesti nove tretmane koji su u skladu s najnovijim trendovima.</p>

              <p>Danas smo ponosni što možemo reći da smo postali jedan od prepoznatljivijih kozmetičkih salona u gradu. Nastavljamo se truditi da unaprijedimo svoju ponudu i pružimo najbolju uslugu našim klijentima. Naši kozmetičari stalno uče i razvijaju svoje vještine kako bismo uvijek bili u korak s najnovijim trendovima i inovacijama.</p>

              <p>Hvala Vam što ste dio naše priče i što nam dopuštate da vas osvježimo i uljepšamo. <br/>
                Radujemo se što ćemo Vas uslužiti u našem salonu i što ćemo zajedno kreirati još mnogo lijepih trenutaka.</p>
            </div>
          </section>

          <section className="slike">
            <Slider images={images} />
          </section>

        </Layout>
    )
}
export default Onama

export const query = graphql`
  query {
    allFile(filter: {relativePath: {}, relativeDirectory: {eq: "salon"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
        }
      }
    }
  }
`