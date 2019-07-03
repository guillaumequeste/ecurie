import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './EcurieRMC2015Galopeurs.css'

class EcurieRMC2015Galopeurs extends Component {
  
    render () {
        return (
            <div className="bodyGalopeurs2013">
                <Header />
                <h1 className="titreGalopeurs2013">Ecurie RMC 2015 - Galopeurs</h1>
                <div className="cardsGalopeurs2013">
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2015/galopeurs2015/beynostorm/beynostorm1.jpg")} alt="beynostorm"/>
                                <div className="card-body">
                                    <Link to="/beynostorm" className="btn btn-primary">Beynostorm</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2015/galopeurs2015/countess/countess1.jpg")} alt="countess_allegro"/>
                                <div className="card-body">
                                    <Link to="/countess_allegro" className="btn btn-primary">Countess Allegro</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2015/galopeurs2015/park/park1.jpg")} alt="park_square"/>
                                <div className="card-body">
                                    <Link to="/park_square" className="btn btn-primary">Park Square</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2015/galopeurs2015/valley/valley1.jpg")} alt="valley_kid"/>
                                <div className="card-body">
                                    <Link to="/valley_kid" className="btn btn-primary">Valley Kid</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EcurieRMC2015Galopeurs