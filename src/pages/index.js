import * as React from "react"
import { Script } from 'gatsby'
import { Seo } from '../components/Seo'
import Layout from '../components/Layout'
import '../assets/css/main.scss'




export default function Home() {
  return (
      <Layout>

        {/*<Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />*/}


        <h2>Kozmeticki salon Queen</h2>


      </Layout>
  )
}

export const Head = () => {
  return(
      <>
        <Seo title="Početna | Queen" />
      </>
  )
}