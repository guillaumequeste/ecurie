import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import './EcurieXXL.css'

class EcurieXXL extends Component {
  
    render () {
        return (
            <div className="bodyXXL">
                <Header />
                <div className="liens">
                <h1 className="titreXXL">Ecurie XXL<img className="casaqueXXL" src={require("../../img/XXL/casaqueXXL.png")} alt="casaqueXXL"/></h1>
                <div className="divXXL">
                    <div className="card">
                        <img className="card-img-top" src={require("../../img/obstacle.png")} alt="obstacle"/>
                        <div className="card-body">
                            <Link to="/sauteursXXL" className="btn btn-primary">Sauteurs XXL</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default EcurieXXL