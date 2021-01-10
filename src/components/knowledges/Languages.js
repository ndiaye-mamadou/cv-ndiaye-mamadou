import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

export default class Languages extends Component {
    state = {
             languages:[
                 {id: 0, value: "HTML",xp:1.8},
                 {id: 5, value: "MySQL",xp:1.5},
                {id: 1, value: "Javascript",xp:0.8}, 
                {id: 2, value: "CSS",xp:0.7},
                {id: 3, value: "PHP",xp:1.7},
                {id: 4, value: "PYTHON",xp:1},
               
             ],
             frameworks:[
                {id: 1, value: "React",xp:0.6},
                {id: 2, value: "Boostrap",xp:1},
                {id: 3, value: "Sass",xp:0.6},
                {id: 3, value: "WordPress",xp:1.5},
             ]

    }
    render() {
        //on recupere nos 2 state sur {languages,frameworks}
        let {languages,frameworks}=this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                languages={languages}
                className="languagesDisplay"
                titlle="languages"
                />
                <ProgressBar
                titlle="frameworks et bibiliotheques"
                 languages={frameworks}
                className="frameworksDisplay"
                
                />
                
            </div>
        )
    }
}
