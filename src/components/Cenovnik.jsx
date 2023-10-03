import React, { useState } from 'react';
import '../assets/css/cenovnik.scss';

import { graphql, useStaticQuery } from "gatsby";

import Accordion from 'react-bootstrap/Accordion';

const Cenovnik = () => {

    const data = useStaticQuery(graphql`
        query {
          allFile(filter: {relativeDirectory: {eq: "cenovnik"}}) {
            totalCount
            edges {
              node {
                id
                childMarkdownRemark {
                  frontmatter {
                    vrsta {
                      cenaUsluge
                      vrstaUsluge
                    }
                    title
                  }
                }
              }
            }
          }
        }
    `);

    const lista = data.allFile.edges;

    // Dodajemo stanje za praćenje aktivne stavke
    const [activeKey, setActiveKey] = useState(null);

    // Funkcija za upravljanje otvaranjem i zatvaranjem stavki
    const handleAccordionClick = (uniqueId) => {
        // Ako je trenutno otvoren neki accordion, zatvorimo ga
        if (activeKey !== null) {
            setActiveKey(null);
        }

        // Otvori novi accordion samo ako nije isti kao prethodni
        if (uniqueId !== activeKey) { // Dodajemo ovu liniju koda
            setActiveKey(uniqueId);
        }
    };


    return (

        <>

            {lista.map(({node}) => {

                const title = node.childMarkdownRemark.frontmatter.title;
                const uniqueId = `accordion-${node.id}`;

                return(
                    <Accordion  className='lista-wrap' flush key={uniqueId} activeKey={activeKey} // Dodajemo activeKey svojstvo na Accordion komponentu
                    >
                        <Accordion.Item eventKey={uniqueId} className='lista-item' id={uniqueId} onClick={() => handleAccordionClick(uniqueId)} // Dodajemo onClick handler
                                        active={activeKey === uniqueId} >
                            <Accordion.Header className='lista-header'>
                                {title}
                            </Accordion.Header>

                            {node.childMarkdownRemark.frontmatter.vrsta.map((vrsta) => {
                                return(
                                    <Accordion.Body className='lista-body d-flex justify-content-between'>
                                        <p>{vrsta.vrstaUsluge}</p>
                                        <p>{vrsta.cenaUsluge}</p>
                                    </Accordion.Body>
                                )
                            })}

                        </Accordion.Item>
                    </Accordion>
                )
            })}

        </>
    );
}

export default Cenovnik;


