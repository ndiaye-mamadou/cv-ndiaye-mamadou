import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div  className="notfoundContent">
            <h3>Désolé cette page n'existe pas </h3>
                 <div  className="content">

                     <NavLink exact to="/" >
                         <i className fas fa-home></i>
                         <span> Accueil</span>
                     </NavLink>
                 </div>
            </div>
        </div>
    );
};

export default NotFound;