import React from 'react';
import Navigation from '../components/Navigation';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
                <div className="contactContent">
                    <div className="header"></div>
                         <div className="contactBox">
                            <h1>Contactez-moi</h1>
                               <ul>
                                  <li>
                                     <i className="fas fa-map-marker-alt"></i>
                                      <span> Dakar </span>
                                      </li>
                                      <li>
                                       <i className="fas fa-mobile-alt"></i>
                                          <CopyToClipboard text="00221776831196"> 
                                            <span className="clickInput" 
                                              onClick={()=>{alert('Numéro Téléphone copié !');}}>+221 77 683 11 96</span>
                                          </CopyToClipboard>
                                    </li>

                                   <li>
                                       <i className="far fa-envelope"></i>
                                       
                                           <CopyToClipboard text="ndiaye111mamadou@gmail.com"> 
                                            <span className="clickInput" 
                                              onClick={()=>{alert('Email copié !');}}>ndiaye111mamadou@gmail.com</span>
                                           </CopyToClipboard>
                                     </li>
                                 </ul>
                        </div>
            

            <div className = "socialNetwork">
                <ul>
                   
                        <a href="https://linkedin.com/in/111mamadou" target ="_blank"
                         rel = "noopener noreferrer">
                        <h4>Linkedin </h4>
                        <i className = "fab fa-linkedin"></i> 
                        </a>
                   

                     
                        <a href="https://github.com/ndiaye-mamadou" target ="_blank"
                         rel = "noopener noreferrer">
                        
                        <h4>Github </h4>
                        <i className = "fab fa-github"></i>
                         </a>
                         
                     
                </ul>
               
            </div>

        </div>
         </div>
    );
};

export default Contact;