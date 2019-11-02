import React, { Component } from 'react'
import Header from '../../Header'
import './Dalkelef.css'

class Dalkelef extends Component {
  
    render () {
        return (
            <div className="bodyChevalDalkelef">
                <Header />
                <h1 className="nomCheval">Dalkelef</h1>
                <img className="imgDetail" src={require("../../../img/ClubRMC/galopeursClub/dalkelef/dalkelef1.jpg")} alt="dalkelef"/>
                <p>6 courses</p>
                <p>1 place</p>
            </div>
        )
    }
}

export default Dalkelef