import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './EcurieRMC2014Trotteurs.css'

class EcurieRMC2014Trotteurs extends Component {
  
    render () {
        return (
            <div className="bodyGalopeurs2013">
                <Header />
                <h1 className="titreGalopeurs2013">Ecurie RMC 2014 - Trotteurs</h1>
                <div className="cardsGalopeurs2013">
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2014/trotteurs2014/arancio/arancio1.jpg")} alt="arancio"/>
                                <div className="card-body">
                                    <Link to="/arancio" className="btn btn-primary">Arancio</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2014/trotteurs2014/auteur/auteur1.jpg")} alt="auteur"/>
                                <div className="card-body">
                                    <Link to="/auteur2014" className="btn btn-primary">Auteur</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2014/trotteurs2014/baldi/baldi1.jpg")} alt="baldi_star"/>
                                <div className="card-body">
                                    <Link to="/baldi_star" className="btn btn-primary">Baldi Star</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2014/trotteurs2014/borsalino/borsalino1.jpg")} alt="borsalino_du_jal"/>
                                <div className="card-body">
                                    <Link to="/borsalino_du_jal" className="btn btn-primary">Borsalino du Jal</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2014/trotteurs2014/unrefundable/unrefundable6.jpg")} alt="unrefundable"/>
                                <div className="card-body">
                                    <Link to="/unrefundable2014" className="btn btn-primary">Unrefundable</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EcurieRMC2014Trotteurs