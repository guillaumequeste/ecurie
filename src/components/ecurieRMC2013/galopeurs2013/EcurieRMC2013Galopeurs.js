import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './EcurieRMC2013Galopeurs.css'

class EcurieRMC2013Galopeurs extends Component {
  
    render () {
        return (
            <div className="bodyGalopeurs2013">
                <Header />
                <h1 className="titreGalopeurs2013">Ecurie RMC 2013 - Galopeurs</h1>
                <div className="cardsGalopeurs2013">
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2013/galopeurs2013/benodet/benodet1.jpeg")} alt="benodet"/>
                                <div className="card-body">
                                    <Link to="/benodet" className="btn btn-primary">Benodet</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2013/galopeurs2013/falcolina/falcolina1.jpg")} alt="falcolina"/>
                                <div className="card-body">
                                    <Link to="/falcolina" className="btn btn-primary">Falcolina</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2013/galopeurs2013/pan/pan1.jpg")} alt="pan_di_stelle"/>
                                <div className="card-body">
                                    <Link to="/pan_di_stelle" className="btn btn-primary">Pan di Stelle</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2013/galopeurs2013/pedregalejo/pedregalejo1.jpg")} alt="pedregalejo"/>
                                <div className="card-body">
                                    <Link to="/pedregalejo" className="btn btn-primary">Pedregalejo</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2013/galopeurs2013/shingueti/shingueti1.jpg")} alt="shingueti"/>
                                <div className="card-body">
                                    <Link to="/shingueti" className="btn btn-primary">Shingueti</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2013/galopeurs2013/sole/sole1.jpg")} alt="sole_reign"/>
                                <div className="card-body">
                                    <Link to="/sole_reign" className="btn btn-primary">Sole Reign</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2013/galopeurs2013/solside/solside1.jpg")} alt="solside"/>
                                <div className="card-body">
                                    <Link to="/solside" className="btn btn-primary">Solside</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2013/galopeurs2013/sweet/sweet1.jpg")} alt="sweet_smoke"/>
                                <div className="card-body">
                                    <Link to="/sweet_smoke" className="btn btn-primary">Sweet Smoke</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/RMC2013/galopeurs2013/tchoupi/tchoupi1.jpg")} alt="tchoupi_chop"/>
                                <div className="card-body">
                                    <Link to="/tchoupi_chop" className="btn btn-primary">T'Choupi Chop</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EcurieRMC2013Galopeurs