import React from 'react'
import Navigacija from '../components/Navigacija'
import Footer from "../components/Footer";
import '../assets/css/layout.scss'

import Pahulje from '../components/Pahulje'

import Test from '../components/Test'

// import Obavest from '../components/Obavest'


const Layout = ({children}) => {
    return(
        <div className='layout'>

          <Test />

          <Pahulje />

            <Navigacija />

            {children}

            <Footer />
        </div>
    )
}
export default Layout