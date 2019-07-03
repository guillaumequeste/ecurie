import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './GalanteDArthel.css'

class GalanteDArthel extends Component {
  
    render () {
        return (
            <div className="bodyChevalGalanteDArthel">
                <Header />
                <h1 className="nomCheval">Galante d'Arthel</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/galante/galante1.jpg")} alt="galante_d_arthel"/>
            </div>
        )
    }
}

export default GalanteDArthel