import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './EcurieClubRMCTrotteurs.css'

class EcurieClubRMCTrotteurs extends Component {
  
    render () {
        return (
            <div className="bodyGalopeurs2013">
                <Header />
                <h1 className="titreGalopeurs2013">Ecurie Club RMC - Trotteurs</h1>
                <div className="cardsGalopeurs2013">
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/trotteursClub/cristal/cristal1.jpg")} alt="cristal_pierji"/>
                                <div className="card-body">
                                    <Link to="/cristal_pierjiClub" className="btn btn-primary">Cristal Pierji</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/trotteursClub/django/django5.jpg")} alt="django_gibus"/>
                                <div className="card-body">
                                    <Link to="/django_gibus" className="btn btn-primary">Django Gibus</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/trotteursClub/domino/domino1.jpg")} alt="domino_de_larre"/>
                                <div className="card-body">
                                    <Link to="/domino_de_larre" className="btn btn-primary">Domino de Larré</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/trotteursClub/drakkar/drakkar2.jpg")} alt="drakkar_delo"/>
                                <div className="card-body">
                                    <Link to="/drakkar_deloClub" className="btn btn-primary">Drakkar Delo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/trotteursClub/eclipse/eclipse2.jpg")} alt="eclipse_somolli"/>
                                <div className="card-body">
                                    <Link to="/eclipse_somolli" className="btn btn-primary">Eclipse Somolli</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EcurieClubRMCTrotteurs