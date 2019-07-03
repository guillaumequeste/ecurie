import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './Auteur2015.css'

class Auteur2015 extends Component {
  
    render () {
        return (
            <div className="bodyChevalAuteur2015">
                <Header />
                <h1 className="nomCheval">Auteur (2015)</h1>
                <img className="imgDetail" src={require("../../../img/RMC2015/trotteurs2015/auteur/auteur1.jpg")} alt="auteur"/>
                <p>4 courses</p>
                <p>2 victoires à Vincennes</p>
                <p>2 places</p>
            </div>
        )
    }
}

export default Auteur2015