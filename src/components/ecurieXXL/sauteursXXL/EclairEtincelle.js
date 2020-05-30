import React, { Component } from 'react'
import Header from '../../Header'
import './EclairEtincelle.css'

class EclairEtincelle extends Component {
  
    render () {
        return (
            <div className="bodyChevalEclairEtincelle">
                <Header />
                <h1 className="nomCheval">Eclair Etincelle</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/eclair/eclair1.jpg")} alt="eclair_etincelle"/>
                <p>3 courses</p>
                <p>1 victoire à Sablé-sur-Sarthe</p>
            </div>
        )
    }
}

export default EclairEtincelle