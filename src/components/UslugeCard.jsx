import React from 'react'
import { Link } from 'gatsby'

import { StaticImage } from "gatsby-plugin-image";

import '../assets/css/usluge-card.scss'


const UslugeCard = () => {

    return (
        <div className='usluge-kartice'>

            <div className="kartice-omotac">
                <div className="omotac1">
                    <div className="container d-flex align-items-center justify-content-center flex-wrap">
                        <div className="box">
                            <div className="body">
                                <div className="imgContainer">
                                    <StaticImage
                                        src="../assets/images/osnovne/manikir1-1.jpg"
                                        alt="slika"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={200}
                                        height={200}
                                        className="img"
                                    />
                                    <div className="tekst">
                                        <h1>Njega ruku</h1>
                                    </div>
                                </div>
                                <div className="content d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        {/*<h3 className="text-white fs-5">{props.naslov}</h3>*/}
                                        <p className="fs-6 text-white">Nadogradnja, geliranje, trajni lak, Queen, Swarovski...</p>
                                        <button><Link to='#' >Saznaj više</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="omotac1">
                    <div className="container d-flex align-items-center justify-content-center flex-wrap">
                        <div className="box">
                            <div className="body">
                                <div className="imgContainer">
                                    <StaticImage
                                        src="../assets/images/osnovne/pedikir1-1.png"
                                        alt="slika"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={200}
                                        height={200}
                                        className="img"
                                    />
                                    <div className="tekst">
                                        <h1>Njega nogu</h1>
                                    </div>
                                </div>
                                <div className="content d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        {/*<h3 className="text-white fs-5">{props.naslov}</h3>*/}
                                        <p className="fs-6 text-white">Vasa stopala zasluzuju najbolju njegu!</p>
                                        <button><Link to='#' >Saznaj više</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="omotac1">
                    <div className="container d-flex align-items-center justify-content-center flex-wrap">
                        <div className="box">
                            <div className="body">
                                <div className="imgContainer">
                                    <StaticImage
                                        src="../assets/images/osnovne/depilacija1-1.jpg"
                                        alt="slika"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={200}
                                        height={200}
                                        className="img"
                                    />
                                    <div className="tekst">
                                        <h1>Depilacija</h1>
                                    </div>
                                </div>
                                <div className="content d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        {/*<h3 className="text-white fs-5">{props.naslov}</h3>*/}
                                        <p className="fs-6 text-white">Konstantno uklanjanje dlaka je skoro svakodnevna tema za žene.</p>
                                        <button><Link to='#' >Saznaj više</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="kartice-omotac">
                <div className="omotac1">
                    <div className="container d-flex align-items-center justify-content-center flex-wrap">
                        <div className="box">
                            <div className="body">
                                <div className="imgContainer">
                                    <StaticImage
                                        src="../assets/images/osnovne/masaza1-1.jpg"
                                        alt="slika"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={200}
                                        height={200}
                                        className="img"
                                    />
                                    <div className="tekst">
                                        <h1>Masaža</h1>
                                    </div>
                                </div>
                                <div className="content d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        {/*<h3 className="text-white fs-5">{props.naslov}</h3>*/}
                                        <p className="fs-6 text-white">Treba vam opuštanje i relaksacija?</p>
                                        <button><Link to='#' >Saznaj više</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="omotac1">
                    <div className="container d-flex align-items-center justify-content-center flex-wrap">
                        <div className="box">
                            <div className="body">
                                <div className="imgContainer">
                                    <StaticImage
                                        src="../assets/images/osnovne/obrve1-1.jpg"
                                        alt="slika"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={200}
                                        height={200}
                                        className="img"
                                    />

                                    <div className="tekst">
                                        <h1>Obrve</h1>
                                    </div>
                                </div>
                                <div className="content d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        {/*<h3 className="text-white fs-5">{props.naslov}</h3>*/}
                                        <p className="fs-6 text-white">Savršeno oblikovane obrve su ključni dio svakog savršenog izgleda</p>
                                        <button><Link to='#' >Saznaj više</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="omotac1">
                    <div className="container d-flex align-items-center justify-content-center flex-wrap">
                        <div className="box">
                            <div className="body">
                                <div className="imgContainer">
                                    <StaticImage
                                        src="../assets/images/osnovne/trepavice1-1.jpg"
                                        alt="slika"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={200}
                                        height={200}
                                        className="img"
                                    />
                                    <div className="tekst">
                                        <h1>Trepavice</h1>
                                    </div>
                                </div>
                                <div className="content d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        {/*<h3 className="text-white fs-5">{props.naslov}</h3>*/}
                                        <p className="fs-6 text-white">Osvježite svoj izgled s dugim i punim trepavicama!</p>
                                        <button><Link to='#' >Saznaj više</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <div className="kartice-omotac">
                <div className="omotac1">
                    <div className="container d-flex align-items-center justify-content-center flex-wrap">
                        <div className="box">
                            <div className="body">
                                <div className="imgContainer">
                                    <StaticImage
                                        src="../assets/images/osnovne/lash1-1.jpg"
                                        alt="slika"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={200}
                                        height={200}
                                        className="img"
                                    />
                                    <div className="tekst">
                                        <h1>Lash/Brow Lift</h1>
                                    </div>
                                </div>
                                <div className="content d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        {/*<h3 className="text-white fs-5">{props.naslov}</h3>*/}
                                        <p className="fs-6 text-white">Istakni svoje obrve za savršen oblik lica!</p>
                                        <button><Link to='#' >Saznaj više</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="omotac1">
                    <div className="container d-flex align-items-center justify-content-center flex-wrap">
                        <div className="box">
                            <div className="body">
                                <div className="imgContainer">
                                    <StaticImage
                                        src="../assets/images/osnovne/powder1-1.jpg"
                                        alt="slika"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={200}
                                        height={200}
                                        className="img"
                                    />
                                    <div className="tekst">
                                        <h1>Puder obrve</h1>
                                    </div>
                                </div>
                                <div className="content d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        {/*<h3 className="text-white fs-5">{props.naslov}</h3>*/}
                                        <p className="fs-6 text-white">Postignite savršeno definirane obrve uz Puder obrve!</p>
                                        <button><Link to='#' >Saznaj više</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="omotac1">
                    <div className="container d-flex align-items-center justify-content-center flex-wrap">
                        <div className="box">
                            <div className="body">
                                <div className="imgContainer">
                                    <StaticImage
                                        src="../assets/images/osnovne/sminkanje1-1.jpg"
                                        alt="slika"
                                        placeholder="blurred"
                                        layout="fixed"
                                        width={200}
                                        height={200}
                                        className="img"
                                    />
                                    <div className="tekst">
                                        <h1>Šminkanje</h1>
                                    </div>
                                </div>
                                <div className="content d-flex flex-column align-items-center justify-content-center">
                                    <div>
                                        {/*<h3 className="text-white fs-5">{props.naslov}</h3>*/}
                                        <p className="fs-6 text-white">Osvježi svoj izgled s profesionalnim šminkanjem!</p>
                                        <button><Link to='#' >Saznaj više</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default UslugeCard
