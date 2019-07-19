import React, { Component } from 'react'
import Header from '../../Header'
import './AlRassoul.css'

class AlRassoul extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Al Rassoul</h1>
                <img className="imgDetailAlRassoul" src={require("../../../img/ClubRMC/galopeursClub/al/al1.jpg")} alt="al_rassoul"/>
                <p>17 courses</p>
                <p>2 victoires à Longchamp et Nort-sur-Erdre</p>
                <p>7 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/galopeursClub/al/al3.jpg")} alt="al_rassoul3"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/galopeursClub/al/al2.jpg")} alt="al_rassoul2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlRassoul