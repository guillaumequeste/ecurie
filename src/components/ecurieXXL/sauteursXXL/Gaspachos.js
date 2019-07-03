import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './Gaspachos.css'

class Gaspachos extends Component {
  
    render () {
        return (
            <div className="bodyChevalGaspachos">
                <Header />
                <h1 className="nomCheval">Gaspacho's</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/gaspachos/gaspachos1.jpg")} alt="gaspachos"/>
            </div>
        )
    }
}

export default Gaspachos