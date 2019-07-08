import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './EcurieRMC2015Trotteurs.css'

class EcurieRMC2015Trotteurs extends Component {
  
    render () {
        return (
            <div className="bodyGalopeurs2013">
                <Header />
                <h1 className="titreGalopeurs2013">Ecurie RMC 2015 - Trotteurs</h1>
                <div className="cardsGalopeurs2013">
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2015/trotteurs2015/auteur/auteur1.jpg")} alt="auteur"/>
                                <div className="card-body">
                                    <Link to="/auteur2015" className="btn btn-primary">Auteur</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2015/trotteurs2015/cristal/cristal2.jpeg")} alt="cristal_pierji"/>
                                <div className="card-body">
                                    <Link to="/cristal_pierji2015" className="btn btn-primary">Cristal Pierji</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2015/trotteurs2015/drakkar/drakkar2.jpg")} alt="drakkar_delo"/>
                                <div className="card-body">
                                    <Link to="/drakkar_delo2015" className="btn btn-primary">Drakkar Delo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2015/trotteurs2015/unrefundable/unrefundable6.jpg")} alt="unrefundable"/>
                                <div className="card-body">
                                    <Link to="/unrefundable2015" className="btn btn-primary">Unrefundable</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EcurieRMC2015Trotteurs