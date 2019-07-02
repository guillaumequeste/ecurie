import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import './EcurieRMC2014.css'

class EcurieRMC2014 extends Component {
  
    render () {
        return (
            <div className="body2014">
                <Header />
                <div className="liens">
                <h1 className="titre2014">Ecurie RMC 2014<img className="casaque2014" src={require("../../img/RMC2014/casaque2014.png")} alt="casaque2014"/></h1>
                <div className="div2014">
                    <div className="card">
                        <img className="card-img-top" src={require("../../img/plat.png")} alt="plat"/>
                        <div className="card-body">
                                <Link to="/galopeurs2014" className="btn btn-primary">Galopeurs 2014</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={require("../../img/trot.jpg")} alt="trot"/>
                        <div className="card-body">
                                <Link to="/galopeurs2014" className="btn btn-primary">Galopeurs 2014</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default EcurieRMC2014