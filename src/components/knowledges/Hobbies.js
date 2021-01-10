import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3> Intérés</h3>
           
             <ul>
                   <li className="hobby">
                     <i className="fas fa-seedling"></i>
                     <span>Biologie </span>
                     </li>

                 <li className="hobby">
                     <i className="fas fa-running"></i>
                     <span>Course à pieds </span>
                     </li>
                     <li className="hobby">
                     <i className="fas fa-hiking"></i>
                     <span>Randonnées </span>
                     </li>
                   
                     <li className="hobby">
                     <i className="fab fa-laptop"></i>
                     <span>Programmation </span>
                     </li>
                    
             </ul>
        </div>
    );
};

export default Hobbies;