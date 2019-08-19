import React, { Component } from 'react'
import Header from '../../Header'

class EclipseSomolli extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Eclipse Somolli</h1>
                <img className="imgDetailJurisprudance" src={require("../../../img/ClubRMC/trotteursClub/eclipse/eclipse1.jpg")} alt="eclipse_somolli"/>
                <p>15 courses</p>
                <p>3 victoires à Mauquenchy, Cabourg et aux Sables d'Olonne</p>
                <p>2 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/eclipse/eclipse2.jpg")} alt="eclipse_somolli2"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/eclipse/eclipse3.jpg")} alt="eclipse_somolli3"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/eclipse/eclipse4.jpg")} alt="eclipse_somolli4"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default EclipseSomolli