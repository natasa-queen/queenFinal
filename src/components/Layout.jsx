import React from 'react'
import Navigacija from '../components/Navigacija'
import Footer from "../components/Footer";
import '../assets/css/layout.scss'

// import Obavest from '../components/Obavest'


const Layout = ({children}) => {
    return(
        <div className='layout'>

          {/*<Obavest />*/}

            <Navigacija />

            {children}

            <Footer />
        </div>
    )
}
export default Layout