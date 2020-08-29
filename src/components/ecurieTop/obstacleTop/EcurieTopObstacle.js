import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './EcurieTopObstacle.css'

class EcurieTopObstacle extends Component {
  
    render () {
        return (
            <div className="bodyGalopeurs2013">
                <Header />
                <h1 className="titreGalopeurs2013">Ecurie Top - Obstacle</h1>
                <div className="cardsGalopeurs2013">
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/Top/obstacleTop/highlands/highlands01.jpg")} alt="highlands01"/>
                                <div className="card-body">
                                    <Link to="/highlands" className="btn btn-primary">Highlands d'Allier</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EcurieTopObstacle