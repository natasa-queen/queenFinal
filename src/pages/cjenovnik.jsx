import React from 'react'
import Layout from '../components/Layout'

import '../assets/css/cenovnik-page.scss'

import Cenovnik from '../components/Cenovnik'
// import Test from '../components/Test'


const Cjenovnik = () => {
    return(
        <Layout>
            <div className="cen-page">
                <h2>Cjenovnik</h2>

                {/*<Test />*/}
                <Cenovnik />
            </div>

        </Layout>
    )
}
export default Cjenovnik