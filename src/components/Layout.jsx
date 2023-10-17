import React from 'react'
import Navigacija from '../components/Navigacija'
import Footer from "../components/Footer";
import '../assets/css/layout.scss'

import Pahuljice from '../components/Pahulje'



const Layout = ({children}) => {
    return(
        <div className='layout'>


            <Pahuljice />

            <Navigacija />

            {children}

            <Footer />
        </div>
    )
}
export default Layout