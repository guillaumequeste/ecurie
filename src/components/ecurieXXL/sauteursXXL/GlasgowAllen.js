import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './GlasgowAllen.css'

class GlasgowAllen extends Component {
  
    render () {
        return (
            <div className="bodyChevalGlasgowAllen">
                <Header />
                <h1 className="nomCheval">GlasgowAllen</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/glasgow/glasgow1.jpg")} alt="glasgow_allen"/>
            </div>
        )
    }
}

export default GlasgowAllen