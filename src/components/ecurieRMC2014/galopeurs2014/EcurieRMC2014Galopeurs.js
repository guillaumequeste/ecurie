import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './EcurieRMC2014Galopeurs.css'

class EcurieRMC2014Galopeurs extends Component {
  
    render () {
        return (
            <div className="bodyGalopeurs2013">
                <Header />
                <h1 className="titreGalopeurs2013">Ecurie RMC 2014 - Galopeurs</h1>
                <div className="cardsGalopeurs2013">
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2014/galopeurs2014/bowmore/bowmore1.jpg")} alt="bowmore"/>
                                <div className="card-body">
                                    <Link to="/bowmore" className="btn btn-primary">Bowmore</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2014/galopeurs2014/claudia/claudia1.jpg")} alt="claudia"/>
                                <div className="card-body">
                                    <Link to="/claudia_eria" className="btn btn-primary">Claudia Eria</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2014/galopeurs2014/kilava/kilava1.jpg")} alt="kilava"/>
                                <div className="card-body">
                                    <Link to="/kilava" className="btn btn-primary">Kilava</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2014/galopeurs2014/magic/magic1.jpg")} alt="magic_miles"/>
                                <div className="card-body">
                                    <Link to="/magic_miles" className="btn btn-primary">Magic Miles</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2014/galopeurs2014/place/place1.jpg")} alt="place_des_ternes"/>
                                <div className="card-body">
                                    <Link to="/place_des_ternes" className="btn btn-primary">Place des Ternes</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2014/galopeurs2014/pont/pont1.jpg")} alt="pont_marie"/>
                                <div className="card-body">
                                    <Link to="/pont_marie" className="btn btn-primary">Pont Marie</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2014/galopeurs2014/race/race1.jpg")} alt="race_for_fame"/>
                                <div className="card-body">
                                    <Link to="/race_for_fame" className="btn btn-primary">Race For Fame</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EcurieRMC2014Galopeurs