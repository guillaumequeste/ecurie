import React, { Component } from 'react'
import Header from '../../Header'
import './StormKaty.css'

class StormKaty extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Storm Katy</h1>
                <img className="imgDetail" src={require("../../../img/ClubRMC/galopeursClub/storm_katy/storm_katy1.jpg")} alt="storm_katy"/>
                <p>2 courses</p>
                <p>1 place</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/galopeursClub/storm_katy/storm_katy2.jpg")} alt="storm_katy2"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/galopeursClub/storm_katy/storm_katy3.jpg")} alt="storm_katy3"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default StormKaty