import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import './EcurieRMC2013.css'

class EcurieRMC2013 extends Component {
  
    render () {
        return (
            <div className="body2013">
                <Header />
                <div className="liens">
                <h1 className="titre2013">Ecurie RMC 2013<img className="casaque2013" src={require("../../img/RMC2013/casaque2013.png")} alt="casaque2013"/></h1>
                    <div className="div2013">
                        <div className="card">
                            <img className="card-img-top" src={require("../../img/plat.png")} alt="plat"/>
                            <div className="card-body">
                                <Link to="/galopeurs2013" className="btn btn-primary">Galopeurs 2013</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EcurieRMC2013