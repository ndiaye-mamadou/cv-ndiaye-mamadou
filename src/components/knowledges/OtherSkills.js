import React from 'react';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
           <h3>Autres Compétences</h3>
           <div className="list"> 
             <ul>
                 <li><i className="fas fa-check-square"></i>Développeur Décisionnel</li>
                 <li><i className="fas fa-check-square"></i>Développeur Web</li>
                 <li><i className="fas fa-check-square"></i>Data Analyste</li>
                 <li><i className="fas fa-check-square"></i>Administrateur Base de Données</li>
             </ul>
             <ul>
                 <li><i className="fas fa-check-square"></i>Traitement de données</li>
                 <li><i className="fas fa-check-square"></i>Design</li>
                 <li><i className="fas fa-check-square"></i>Linux</li>
                 <li><i className="fas fa-check-square"></i>Manangement de Qualité</li>
             </ul>
           </div>
        </div>
    );
};

export default OtherSkills;