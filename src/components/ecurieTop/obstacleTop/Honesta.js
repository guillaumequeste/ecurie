import React, { Component } from 'react'
import Header from '../../Header'
import './Honesta.css'

class Honesta extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Honesta</h1>
                <img className="imgDetail" src={require("../../../img/Top/obstacleTop/honesta/honesta01.jpg")} alt="honesta01"/>
               
                <div className="row">
                    
                </div>
            </div>
        )
    }
}

export default Honesta