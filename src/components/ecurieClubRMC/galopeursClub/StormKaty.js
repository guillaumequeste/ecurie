import React, { Component } from 'react'
import Header from '../../Header'
import './StormKaty.css'

class StormKaty extends Component {
  
    render () {
        return (
            <div className="bodyChevalStormKaty">
                <Header />
                <h1 className="nomCheval">Storm Katy</h1>
                <img className="imgDetail" src={require("../../../img/ClubRMC/galopeursClub/storm_katy/storm_katy1.jpg")} alt="storm_katy"/>
            </div>
        )
    }
}

export default StormKaty