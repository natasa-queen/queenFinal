import * as React from "react"
import Layout from "../../components/Layout"
// import { Seo } from '../../components/Seo'


import '../../assets/css/usluge-index.scss'


import UslugeCard from '../../components/UslugeCard'



export default function Usluge() {
    return (
        <>

            <Layout>
                <section className="section1">


                    <h1 className='naslov'>Usluge</h1>

                    <div className='uslugeBox'>

                        <UslugeCard />

                    </div>

                </section>
            </Layout>
        </>
    )
}

// export const Head = () => {
//     return(
//         <>
//             <Seo title="Usluge | Queen" />
//         </>
//     )
// }