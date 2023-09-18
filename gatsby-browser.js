// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import './src/assets/css/global.scss'



// // material design
// import "https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.css"

// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// import "@fortawesome/fontawesome-free/css/all.min.css"


// // react scroll reveal
// import 'aos/dist/aos.css'




import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

export const wrapPageElement = ({ element, props }) => {
    return <ParallaxProvider>{element}</ParallaxProvider>
};