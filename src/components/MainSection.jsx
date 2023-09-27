import React, {useEffect} from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import '../assets/css/main-section.scss'


// import AOS from 'aos'
// import 'aos/dist/aos.css'



const MainSection = () => {

    // useEffect( () => {
    //     AOS.init({duration:1500})
    // }, [])

    return(
        <div className='main-section'>
            <div className="main-naslov" data-aos="fade-down" data-aos-once="true">
                <h1>Dobrodošli u Kozmetički salon Queen</h1>
                <h3>Zaslužuješ trenutak samo za tebe. <br/> Naš zadatak je da Vam pomognemo da se osjećate kao Kraljica!</h3>

            </div>

            <div className="main-box">
                <div className="box">
                    <div className="slika-box" data-aos="zoom-in-right">
                        <Link to="/salon">
                            <div className="slika-ram"></div>
                            <StaticImage
                                src="../assets/images/osnovne/16-1.jpg"
                                alt="slika"
                                className='main-slika'
                                placeholder="blurred"
                                layout="fullWidth"
                            />
                        </Link>

                        <div className="text-box">
                            <h3>Naš salon</h3>
                            <p>U našem salonu možete uživati u opuštajućoj atmosferi i prepustiti se našem stručnom timu.</p>
                        </div>
                    </div>

                    <div className="slika-box" data-aos="zoom-in-left">
                        <Link to="/usluge">
                            <div className="slika-ram"></div>
                            <StaticImage
                                src="../assets/images/osnovne/1-1.jpg"
                                alt="slika"
                                className='main-slika'
                                placeholder="blurred"
                                layout="fullWidth"
                            />
                        </Link>

                        <div className="text-box">
                            <h3>Usluge</h3>
                            <p>Naš tim pruža širok spektar usluga, uključujući manikure, pedikure, geliranje noktiju, puder obrve i još mnogo toga.</p>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="slika-box" data-aos="zoom-in-right">
                        <Link to="/o-nama">
                            <div className="slika-ram"></div>
                            <StaticImage
                                src="../assets/images/osnovne/17.png"
                                alt="slika"
                                className='main-slika'
                                placeholder="blurred"
                                layout="fullWidth"
                            />
                        </Link>

                        <div className="text-box">
                            <h3>O nama</h3>
                            {/*<p>Naš salon je dizajniran kako bi vam pružio ugodno i opuštajuće iskustvo, dok se naši stručnjaci brinu o vašim potrebama.</p>*/}
                            <p>Posjetite nas i prepustite se našim stručnjacima, kako bi dobili najbolju njegu i uslugu.</p>
                        </div>
                    </div>

                    <div className="slika-box" data-aos="zoom-in-left">

                        <div className="text-box1">
                            <div className="text-box2">
                                <p>Pobegnite od svakodnevne užurbane stvarnosti i priuštite si neki od naših tretmana. <br/> Njegovane ruke i nokti najvidljivija su vizit karta kako se brinemo o sebi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainSection