import React from 'react'
import Navigacija from '../components/Navigacija'


const Layout = ({children}) => {
    return(
        <>
            <Navigacija />

            {children}
        </>
    )
}
export default Layout