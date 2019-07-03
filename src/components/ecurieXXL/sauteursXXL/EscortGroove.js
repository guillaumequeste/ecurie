import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './EscortGroove.css'

class EscortGroove extends Component {
  
    render () {
        return (
            <div className="bodyChevalEscortGroove">
                <Header />
                <h1 className="nomCheval">Escort'Groove</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/escort/escort1.jpg")} alt="elcondor_forlonge"/>
                <p>1 course</p>
                <p>1 place</p>
            </div>
        )
    }
}

export default EscortGroove