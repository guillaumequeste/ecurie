import React, { Component } from 'react'
import Header from '../../Header'
import './Gaspachos.css'

class Gaspachos extends Component {
  
    render () {
        return (
            <div className="bodyChevalGaspachos">
                <Header />
                <h1 className="nomCheval">Gaspacho's</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/gaspachos/gaspachos1.jpg")} alt="gaspachos"/>
                <p>3 courses</p>
                <p>1 place</p>
            </div>
        )
    }
}

export default Gaspachos