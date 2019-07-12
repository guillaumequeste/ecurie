import React, { Component } from 'react'
import Header from './Header'
import './Auteur.css'

class Auteur extends Component {
  
    render () {
        return (
            <div className="bodyChevalAuteur">
                <Header />
                <h1 className="nomCheval">Auteur</h1>
                <img className="imgDetail" src={require("../img/RMC2014/trotteurs2014/auteur/auteur1.jpg")} alt="auteur"/>
                <p>36 courses</p>
                <p>5 victoires à Lyon-Parilly et Vincennes</p>
                <p>22 places</p>
            </div>
        )
    }
}

export default Auteur