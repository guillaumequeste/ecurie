import React, { Component } from 'react'
import Header from '../../Header'
import './Highlands.css'

class Highlands extends Component {
  
    render () {
        return (
            <div className="bodyChevalHighlands">
                <Header />
                <h1 className="nomCheval">Highlands d'Allier</h1>
                <img className="imgDetail" src={require("../../../img/Top/obstacleTop/highlands/highlands1.jpg")} alt="highlands"/>
            </div>
        )
    }
}

export default Highlands