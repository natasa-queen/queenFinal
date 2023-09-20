import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import '../assets/css/main-section.scss'



const MainSection = () => {
    return(
        <>
            <div className="main-naslov">
                <h1>Dobrodošli u Kozmetički salon Queen</h1>
                <h3>Zaslužuješ trenutak samo za tebe. <br/> Naš zadatak je da Vam pomognemo da se osjećate kao Kraljica!</h3>

            </div>

            <div className="main-box">
                <div className="box">
                    <div className="slika-box">
                        <Link to="/">
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

                    <div className="slika-box">
                        <Link to="/">
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
                    <div className="slika-box">
                        <Link to="/">
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

                    <div className="slika-box">
                        <Link to="/">

                        </Link>

                        <div className="text-box">
                            <div className="text-box1">
                                <p>Pobegnite od svakodnevne užurbane stvarnosti i priuštite si neki od naših tretmana. <br/> Njegovane ruke i nokti najvidljivija su vizit karta kako se brinemo o sebi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainSection