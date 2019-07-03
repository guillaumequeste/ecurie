import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './EclairEtincelle.css'

class EclairEtincelle extends Component {
  
    render () {
        return (
            <div className="bodyChevalEclairEtincelle">
                <Header />
                <h1 className="nomCheval">Eclair Etincelle</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/eclair/eclair1.jpg")} alt="eclair_etincelle"/>
            </div>
        )
    }
}

export default EclairEtincelle