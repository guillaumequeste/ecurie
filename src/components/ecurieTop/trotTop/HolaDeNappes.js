import React, { Component } from 'react'
import Header from '../../Header'
import './HolaDeNappes.css'

class HolaDeNappes extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Hola de Nappes</h1>
                <img className="imgDetail" src={require("../../../img/Top/trotTop/hola/hola01.jpg")} alt="hola01"/>
                <p>2 courses</p>
                <p>2 places</p>
                <div className="row">
                    
                </div>
            </div>
        )
    }
}

export default HolaDeNappes