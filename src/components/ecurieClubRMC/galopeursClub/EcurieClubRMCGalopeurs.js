import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './EcurieClubRMCGalopeurs.css'

class EcurieClubRMCGalopeurs extends Component {
  
    render () {
        return (
            <div className="bodyGalopeurs2013">
                <Header />
                <h1 className="titreGalopeurs2013">Ecurie Club RMC - Galopeurs</h1>
                <div className="cardsGalopeurs2013">
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/galopeursClub/al/al2.jpg")} alt="al_rassoul"/>
                                <div className="card-body">
                                    <Link to="/al_rassoul" className="btn btn-primary">Al Rassoul</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/galopeursClub/cayo/cayo1.jpg")} alt="cayo_coco"/>
                                <div className="card-body">
                                    <Link to="/cayo_coco" className="btn btn-primary">Cayo Coco</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/galopeursClub/dalkelef/dalkelef1.jpg")} alt="dalkelef"/>
                                <div className="card-body">
                                    <Link to="/dalkelef" className="btn btn-primary">Dalkelef</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/galopeursClub/diva/diva1.jpg")} alt="diva_du_dancing"/>
                                <div className="card-body">
                                    <Link to="/diva_du_dancing" className="btn btn-primary">Diva du Dancing</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/galopeursClub/envergure/envergure1.jpg")} alt="envergure"/>
                                <div className="card-body">
                                    <Link to="/envergure" className="btn btn-primary">Envergure</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/galopeursClub/jurisprudance/jurisprudance4.jpg")} alt="jurisprudance"/>
                                <div className="card-body">
                                    <Link to="/jurisprudance" className="btn btn-primary">Jurisprudance</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/galopeursClub/loquen/loquen1.jpg")} alt="loquen"/>
                                <div className="card-body">
                                    <Link to="/loquen" className="btn btn-primary">Loquen</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/galopeursClub/mysoul/mysoul1.jpg")} alt="my_soul"/>
                                <div className="card-body">
                                    <Link to="/my_soul" className="btn btn-primary">My Soul</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/galopeursClub/mysaan/mysaan1.jpg")} alt="mysaan"/>
                                <div className="card-body">
                                    <Link to="/mysaan" className="btn btn-primary">Mysaan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/galopeursClub/saam/saam1.jpg")} alt="saam"/>
                                <div className="card-body">
                                    <Link to="/saam" className="btn btn-primary">Saam</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="liens">
                        <div className="div2013">
                            <div className="card">
                                <img className="card-img-top" src={require("../../../img/ClubRMC/galopeursClub/wabba/wabba1.jpg")} alt="wabba"/>
                                <div className="card-body">
                                    <Link to="/wabba" className="btn btn-primary">Wabba</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EcurieClubRMCGalopeurs