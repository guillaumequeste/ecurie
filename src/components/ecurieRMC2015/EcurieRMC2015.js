import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import './EcurieRMC2015.css'

class EcurieRMC2015 extends Component {
  
    render () {
        return (
            <div className="body2015">
                <Header />
                <div className="liens">
                <h1 className="titre2015">Ecurie RMC 2015<img className="casaque2015" src={require("../../img/RMC2015/casaque2015.png")} alt="casaque2015"/></h1>
                <div className="div2015">
                    <div className="card">
                        <img className="card-img-top" src={require("../../img/plat.png")} alt="plat"/>
                        <div className="card-body">
                                <Link to="/galopeurs2015" className="btn btn-primary">Galopeurs 2015</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={require("../../img/trot.jpg")} alt="trot"/>
                        <div className="card-body">
                                <Link to="/trotteurs2015" className="btn btn-primary">Trotteurs 2015</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default EcurieRMC2015