import React, { Component } from 'react'
import Header from '../../Header'
import './Highlands.css'

class Highlands extends Component {
  
    render () {
        return (
            <div className="bodyChevalHighlands">
                <Header />
                <h1 className="nomCheval">Highlands d'Allier</h1>
                <img className="imgDetail" src={require("../../../img/Top/obstacleTop/highlands/highlands01.jpg")} alt="highlands01"/>
                <p>1 course</p>
            </div>
        )
    }
}

export default Highlands