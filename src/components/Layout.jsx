import React from 'react'
import Navigacija from '../components/Navigacija'
import Footer from "../components/Footer";
import '../assets/css/layout.scss'


const Layout = ({children}) => {
    return(
        <div className='layout'>
            <Navigacija />

            {children}

            <Footer />
        </div>
    )
}
export default Layout