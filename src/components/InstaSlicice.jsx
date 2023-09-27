import React from 'react'
import '../assets/css/insta-slicice.scss'

import { StaticImage } from "gatsby-plugin-image";

import { FaInstagram } from "react-icons/fa6";

import { CiInstagram } from "react-icons/ci"



const InstaSlicice = () => {
    return(
        <section className='insta-box'>
            <div className="box1">
                <div className="box1-1" data-aos="zoom-in-right">
                    <p>Dobrodošli u naš Kozmeticki salon Queen! Ovdje ćete naći sve što je potrebno za savršeno njegovanje svojih noktiju. Naš tim stručnih tehničara za nokte pruža širok spektar usluga, uključujući manikure, pedikure, geliranje noktiju, lakiranje noktiju i još mnogo toga.</p>
                </div>

                <div className="box1-2" data-aos="zoom-in-left">
                    <div className="box1-2-1">
                        <StaticImage
                            src='../assets/images/osnovne/qq1-1.png'
                            alt='Slika'
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </div>
                    <div className="box1-2-2">
                        <p>Svi naši proizvodi su visokokvalitetni i sigurni za korištenje, te smo uvijek spremni preporučiti najbolje proizvode za vaše individualne potrebe.</p>
                    </div>
                </div>
            </div>


            <div className="box2">
                <div className="box2-1">
                    <a href="https://www.instagram.com/kozmeticki_salon_queen/" target="_blank" rel="noreferrer"> <FaInstagram className='insta-logo' /> PRATITE NAS</a>
                </div>


                <div className="box2-2">

                    <a href="https://www.instagram.com/p/CpDm1kLDdSZ/" target="_blank" rel="noreferrer" className='box2-slicica'>
                        <StaticImage
                            src="../assets/images/osnovne/insta1.jpg"
                            alt="slika"
                            className='insta-img'
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </a>
                    <a href="https://www.instagram.com/p/CoZS_JfoNLd/" target="_blank" rel="noreferrer" className='box2-slicica'>
                        <StaticImage
                            src="../assets/images/osnovne/insta3.jpg"
                            alt="slika"
                            className='insta-img'
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </a>
                    <a href="https://www.instagram.com/p/Coy6i6_DGWA/" target="_blank" rel="noreferrer" className='box2-slicica'>
                        <StaticImage
                            src="../assets/images/osnovne/insta4.jpg"
                            alt="slika"
                            className='insta-img'
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </a>
                    <a href="https://www.instagram.com/p/CnVAs2auv6N/" target="_blank" rel="noreferrer" className='box2-slicica'>
                        <StaticImage
                            src="../assets/images/osnovne/insta2.jpg"
                            alt="slika"
                            className='insta-img'
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </a>
                    <a href="https://www.instagram.com/p/CG-p1Tzny4d/" target="_blank" rel="noreferrer" className='box2-slicica'>
                        <StaticImage
                            src="../assets/images/osnovne/insta6.jpg"
                            alt="slika"
                            className='insta-img'
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </a>
                    <a href="https://www.instagram.com/p/CkTAtD4Dp64/" target="_blank" rel="noreferrer" className='box2-slicica'>
                        <StaticImage
                            src="../assets/images/osnovne/insta5.jpg"
                            alt="slika"
                            className='insta-img'
                            placeholder="blurred"
                            layout="fullWidth"
                        />
                    </a>

                </div>
            </div>
        </section>
    )
}
export default InstaSlicice