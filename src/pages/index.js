import React, { useEffect } from "react"
import { Script } from 'gatsby'
import { Seo } from '../components/Seo'
import Layout from '../components/Layout'
import Header from '../components/Header'
import MainSection from "../components/MainSection";
import MainGalleryBox from "../components/MainGalleryBox";
import InstaSlicice from "../components/InstaSlicice";

import Obavest from '../components/Obavest'


import '../assets/css/main.scss'
import '../assets/css/main-section.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Home() {

    useEffect( () => {
        AOS.init({duration:1500})
    }, [])

  return (
      <>

        <Obavest />

        <Header />

        <Layout>
            <section className="main-section">

                <MainSection />
                <MainGalleryBox />
                <InstaSlicice />

            </section>
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