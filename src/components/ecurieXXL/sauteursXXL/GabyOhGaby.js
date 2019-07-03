import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './GabyOhGaby.css'

class GabyOhGaby extends Component {
  
    render () {
        return (
            <div className="bodyChevalGabyOhGaby">
                <Header />
                <h1 className="nomCheval">Gaby Oh Gaby</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/gaby/gaby1.jpg")} alt="gaby_oh_gaby"/>
            </div>
        )
    }
}

export default GabyOhGaby