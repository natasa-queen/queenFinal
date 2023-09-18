import React from 'react'
import Navigacija from '../components/Navigacija'
import '../assets/css/layout.scss'


const Layout = ({children}) => {
    return(
        <div className='layout'>
            <Navigacija />

            {children}
        </div>
    )
}
export default Layout