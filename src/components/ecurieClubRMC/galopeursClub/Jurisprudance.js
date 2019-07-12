import React, { Component } from 'react'
import Header from '../../Header'
import './Jurisprudance.css'

class Jurisprudance extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Jurisprudance</h1>
                <img className="imgDetailJurisprudance" src={require("../../../img/ClubRMC/galopeursClub/jurisprudance/jurisprudance1.jpg")} alt="jurisprudance"/>
                <p>32 courses</p>
                <p>1 victoire à Marseille-Vivaux</p>
                <p>13 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/galopeursClub/jurisprudance/jurisprudance2.jpg")} alt="jurisprudance2"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/galopeursClub/jurisprudance/jurisprudance3.jpg")} alt="jurisprudance3"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/galopeursClub/jurisprudance/jurisprudance4.jpg")} alt="jurisprudance4"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jurisprudance