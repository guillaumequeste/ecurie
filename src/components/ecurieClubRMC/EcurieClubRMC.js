import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import './EcurieClubRMC.css'

class EcurieClubRMC extends Component {
  
    render () {
        return (
            <div className="bodyClub">
                <Header />
                <div className="liens">
                <h1 className="titreClub">Ecurie Club RMC<img className="casaqueClub" src={require("../../img/ClubRMC/casaqueClub.png")} alt="casaqueClub"/></h1>
                <div className="divClub">
                    <div className="card">
                        <img className="card-img-top" src={require("../../img/plat.png")} alt="plat"/>
                        <div className="card-body">
                                <Link to="/galopeursClub" className="btn btn-primary">Galopeurs Club RMC</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={require("../../img/trot.jpg")} alt="trot"/>
                        <div className="card-body">
                                <Link to="/trotteursClub" className="btn btn-primary">Trotteurs Club RMC</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default EcurieClubRMC