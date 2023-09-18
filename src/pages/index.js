import * as React from "react"
import { Script } from 'gatsby'
import { Seo } from '../components/Seo'
import Layout from '../components/Layout'
import Header from '../components/Header'
import '../assets/css/main.scss'




export default function Home() {
  return (
      <>
        <Header />

        <Layout>

          <h2>Kozmeticki salon Queen</h2>

        </Layout>
      </>
  )
}

export const Head = () => {
  return(
      <>
        <Seo title="Početna | Queen" />
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      </>
  )
}