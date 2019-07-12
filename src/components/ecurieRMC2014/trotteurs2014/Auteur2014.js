import React, { Component } from 'react'
import Header from '../../Header'
import './Auteur2014.css'

class Auteur2014 extends Component {
  
    render () {
        return (
            <div className="bodyChevalAuteur2014">
                <Header />
                <h1 className="nomCheval">Auteur (2014)</h1>
                <img className="imgDetail" src={require("../../../img/RMC2014/trotteurs2014/auteur/auteur1.jpg")} alt="auteur"/>
                <p>32 courses</p>
                <p>3 victoires à Lyon-Parilly et Vincennes</p>
                <p>20 places</p>
            </div>
        )
    }
}

export default Auteur2014