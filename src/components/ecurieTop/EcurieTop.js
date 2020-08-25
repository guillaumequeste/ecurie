import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import './EcurieTop.css'

class EcurieTop extends Component {
  
    render () {
        return (
            <div className="bodyTop">
                <Header />
                <div className="liens">
                <h1 className="titreTop">Ecurie Top<img className="casaqueTop" src={require("../../img/Top/casaqueTop.jpg")} alt="casaqueTop"/></h1>
                <div className="divTop">
                    <div className="card">
                        <img className="card-img-top" src={require("../../img/plat.png")} alt="plat"/>
                        <div className="card-body">
                                <Link to="/galopTop" className="btn btn-primary">Galop Top</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={require("../../img/trot.jpg")} alt="trot"/>
                        <div className="card-body">
                                <Link to="/trotTop" className="btn btn-primary">Trot Top</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={require("../../img/obstacle.png")} alt="obstacle"/>
                        <div className="card-body">
                                <Link to="/obstacleTop" className="btn btn-primary">Obstacle Top</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default EcurieTop