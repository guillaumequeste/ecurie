import React, { Component } from 'react'
import Header from '../../Header'

class DominodeLarre extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Domino de Larré</h1>
                <img className="imgDetailJurisprudance" src={require("../../../img/ClubRMC/trotteursClub/domino/domino1.jpg")} alt="domino_de_larre"/>
                <p>44 courses</p>
                <p>2 victoires à Agen</p>
                <p>24 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/domino/domino2.jpg")} alt="domino_de_larre2"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/domino/domino3.jpg")} alt="domino_de_larre3"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/domino/domino4.jpg")} alt="domino_de_larre4"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/domino/domino5.jpg")} alt="domino_de_larre5"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/domino/domino6.jpg")} alt="domino_de_larre6"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/domino/domino7.jpg")} alt="domino_de_larre7"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/domino/domino8.jpg")} alt="domino_de_larre8"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DominodeLarre