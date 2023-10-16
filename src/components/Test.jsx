// import React, { useState } from 'react';
// import '../assets/css/cenovnik.scss';
//
// import { graphql, useStaticQuery } from "gatsby";
//
// import * as mdb from 'mdb-ui-kit';
//
//
// const Test = () => {
//
//   const data = useStaticQuery(graphql`
//         query {
//           allFile(filter: {relativeDirectory: {eq: "cenovnik"}}) {
//             totalCount
//             edges {
//               node {
//                 id
//                 childMarkdownRemark {
//                   frontmatter {
//                     vrsta {
//                       cenaUsluge
//                       vrstaUsluge
//                     }
//                     title
//                   }
//                 }
//               }
//             }
//           }
//         }
//     `);
//
//   const lista = data.allFile.edges;
//
//   // Define a state to store the active collapse item key
//   const [activeKey, setActiveKey] = useState(null);
//
//   // Define a function to toggle the collapse item
//   const toggleCollapse = (key) => {
//     // If the key is already active, set it to null (close the item)
//     if (key === activeKey) {
//       setActiveKey(null);
//     } else {
//       // Otherwise, set it to the key (open the item)
//       setActiveKey(key);
//     }
//   }
//
//   return(
//       <>
//         <h2>Test</h2>
//
//
//         {lista.map(({node}) => {
//
//           const title = node.childMarkdownRemark.frontmatter.title;
//           const uniqueId = `collapse-${node.id}`;
//
//           return(
//               <div className="accordion accordion-borderless" id="accordionFlushExample" key={uniqueId}>
//
//                 <div className="accordion-item">
//
//                   <h2 className="accordion-header" id={uniqueId}>
//
//                     <button
//                         className="accordion-button collapsed"
//                         type="button"
//                         aria-expanded={activeKey === uniqueId} // Use the state to control the expanded attribute
//                         aria-controls={uniqueId} // Use the uniqueId as the aria-controls attribute
//                         onClick={() => toggleCollapse(uniqueId)} // Use the function to handle the click event
//                     >
//                       {title}
//                     </button>
//                   </h2>
//
//                   <div
//                       id={uniqueId} // Use the uniqueId as the id attribute
//                       className={`collapse ${activeKey === uniqueId ? 'show' : ''}`} // Use the state to control the show class name
//                       aria-labelledby={uniqueId} // Use the uniqueId as the aria-labelledby attribute
//                       data-mdb-parent="#accordionFlushExample"
//                   >
//
//                     <div className="accordion-body">
//                       {node.childMarkdownRemark.frontmatter.vrsta.map((vrsta) => {
//                         return(
//                             <div className='usluge'>
//                               <p>{vrsta.vrstaUsluge}</p>
//                               <p>{vrsta.cenaUsluge}</p>
//                             </div>
//                         )
//                       })}
//                     </div>
//
//                   </div>
//                 </div>
//               </div>
//           )
//
//         })}
//       </>
//   )
// }
// export default Test
