import React from 'react'
import { Seo } from '../components/Seo'

import Layout from '../components/Layout'

import '../assets/css/rezervacija.scss'

import { LiaPhoneSolid, LiaViber, LiaInstagram, LiaFacebook, LiaFacebookMessenger } from "react-icons/lia";


const Rezervacija = () => {
    return(
        <Layout>
            <section className="section1">
                <div className="rezervacija-wrapper">
                    <div className='rezervacija-naslov'>
                        <h2>Rezervišite svoje termine</h2>
                        <p>Izaberite jedan od načina rezervacije i jednostavno zakažite svoje tretmane.</p>
                    </div>
                    <div className='rezervacija-poziv'>
                        <a href="tel: +38765255827"><LiaPhoneSolid />Pozovite nas</a>
                    </div>
                    <div className='rezervacija-social'>
                        <a href="viber://chat?number=%2B38765255827"><LiaViber /></a>
                        <a href="https://www.instagram.com/kozmeticki_salon_queen/"><LiaInstagram /></a>
                        <a href="https://www.facebook.com/ks.queen.prnjavor"><LiaFacebook /></a>
                        <a href="https://m.me/Kozmetički salon - QUEEN=fm"><LiaFacebookMessenger /></a>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
export default Rezervacija

export const Head = () => {
    return(
        <>
            <Seo title="Rezervacija | Queen" />
        </>
    )
}