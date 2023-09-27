import React from 'react'
import { Seo } from '../components/Seo'

import Layout from '../components/Layout'

import '../assets/css/rezervacija.scss'

import { CiInstagram, CiPhone, CiFacebook,  } from "react-icons/ci";
import { FaViber } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";


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
                        <a href="tel: +38765255827"><CiPhone /><p>Pozovite nas</p></a>
                    </div>
                    <div className='rezervacija-social'>
                        <a href="viber://chat?number=%2B38765255827"><FaViber /></a>
                        <a href="https://www.instagram.com/kozmeticki_salon_queen/"><CiInstagram /></a>
                        <a href="https://www.facebook.com/ks.queen.prnjavor"><CiFacebook /></a>
                        <a href="https://m.me/Kozmetički salon - QUEEN=fm"><RiMessengerLine /></a>
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