import React from 'react';
import Navigation from '../components/Navigation';


const Home = () => {
    return (
        <div className= "home">
            <Navigation/>
            <div className= "homeContent">
               <div className= "content">
                  <h1> Mamadou Ndiaye </h1>
                  <h2>Développeur Décisionnel-BioInformaticien</h2>
                   <div className= "pdf">
                      <a href="./media/CV_reactjs-ndiaye.pdf" target="_blank">Télécharger CV</a>
                      <a href="./media/letter-motivation-ndiaye.pdf" target="_blank">LDM</a>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Home;