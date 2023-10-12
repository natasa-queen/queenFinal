import React from 'react'
import { Link } from 'gatsby'
import '../assets/css/footer.scss'

import { LiaMapMarkerSolid, LiaViber, LiaInstagram, LiaFacebook, LiaFacebookMessenger } from "react-icons/lia";


const Footer = () => {

    let g = new Date();
    let godina = g.getFullYear();

    return(
        <footer data-aos="fade-down" data-aos-once="true">
            <div className="fbox1">

                <div className="linkovi-box">
                    <h2>Salon</h2>

                    <div className="linkovi">
                        <Link to="/o-nama">O nama</Link>
                        <Link to="/galerija">Galerija</Link>
                        <Link to="/usluge">Usluge</Link>
                    </div>
                </div>

                <div className="radno-vreme">
                    <h2>Radno vrijeme</h2>

                    <table>
                        <tbody>
                            <tr>
                                <td>Ponedjeljak</td>
                                <td>9.00 - 20.00</td>
                            </tr>
                            <tr>
                                <td>Utorak</td>
                                <td>9.00 - 20.00</td>
                            </tr>
                            <tr>
                                <td>Srijeda</td>
                                <td>9.00 - 20.00</td>
                            </tr>
                            <tr>
                                <td>Četvrtak</td>
                                <td>12.00 - 20.00</td>
                            </tr>
                            <tr>
                                <td>Petak</td>
                                <td>12.00 - 20.00</td>
                            </tr>
                            <tr>
                                <td>Subota</td>
                                <td>9.00 - 14.00</td>
                            </tr>
                            <tr>
                                <td>Nedjelja</td>
                                <td>Ne radimo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="kontakt">
                    <h2>Kontakt</h2>

                    <div className="adresa">
                        <h4>Adresa:</h4>
                        <p>Vladike Platona 26c, 78430 Prnjavor</p>
                        <p>Bosna i Hercegovina</p>

                        <div className="lokacija">
                             <a href="https://goo.gl/maps/bs5eUjS4Lek41Pzm9" target="_blank" ><LiaMapMarkerSolid /> LOKACIJA SALONA</a>
                        </div>
                    </div>


                    <div className="telefon">
                        <h4>Telefon:</h4>
                        <p>+387 65 255 827</p>
                    </div>

                    <div className="socijalne-mreze">
                        <a href="viber://chat?number=%2B38765255827"><LiaViber /></a>
                        <a href="https://www.instagram.com/kozmeticki_salon_queen/"><LiaInstagram /></a>
                        <a href="https://www.facebook.com/ks.queen.prnjavor"><LiaFacebook /></a>
                        <a href="https://m.me/Kozmetički salon - QUEEN=fm"><LiaFacebookMessenger /></a>
                    </div>
                </div>
            </div>

            <div className="fbox2">
                <p>&copy; <span className="godina">2018 - {godina} Kozmetički salon Queen</span></p>
            </div>
        </footer>
    )
}
export default Footer