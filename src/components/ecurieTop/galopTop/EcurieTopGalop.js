import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './EcurieTopGalop.css'

class EcurieTopGalop extends Component {
  
    render () {
        return (
            <div className="bodyGalopeurs2013">
                <Header />
                <h1 className="titreGalopeurs2013">Ecurie Top - Galop</h1>
                <div className="cardsGalopeurs2013">
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/Top/galopTop/apita/apita01.jpg")} alt="apita01"/>
                                <div className="card-body">
                                    <Link to="/apita" className="btn btn-primary">Apita</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/Top/galopTop/kingdor/kingdor03.jpg")} alt="kingdor03"/>
                                <div className="card-body">
                                    <Link to="/kingdor" className="btn btn-primary">Kingdor</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/Top/galopTop/boken/boken01.jpg")} alt="boken01"/>
                                <div className="card-body">
                                    <Link to="/boken" className="btn btn-primary">Boken</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EcurieTopGalop