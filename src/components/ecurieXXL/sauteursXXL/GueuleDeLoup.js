import React, { Component } from 'react'
import Header from '../../Header'
import './GueuleDeLoup.css'

class GueuleDeLoup extends Component {
  
    render () {
        return (
            <div className="bodyChevalGueuleDeLoup">
                <Header />
                <h1 className="nomCheval">Gueule de Loup</h1>
                <img className="imgDetailGueuleDeLoup" src={require("../../../img/XXL/sauteursXXL/gueule/gueule1.jpg")} alt="gueule_de_loup"/>
            </div>
        )
    }
}

export default GueuleDeLoup