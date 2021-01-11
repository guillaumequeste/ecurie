import React, { Component } from 'react'
import Header from '../../Header'
import './Highlands.css'

class Highlands extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Highlands d'Allier</h1>
                <img className="imgDetail" src={require("../../../img/Top/obstacleTop/highlands/highlands01.jpg")} alt="highlands01"/>
                <p>4 courses</p>
                <p>1 victoire à Cagnes-sur-Mer</p>
                <p>3 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/Top/obstacleTop/highlands/highlands02.jpg")} alt="highlands02"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/Top/obstacleTop/highlands/highlands03.jpg")} alt="highlands03"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/Top/obstacleTop/highlands/highlands04.jpg")} alt="highlands04"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Highlands