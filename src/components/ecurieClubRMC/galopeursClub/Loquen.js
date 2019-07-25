import React, { Component } from 'react'
import Header from '../../Header'
import './Loquen.css'

class Loquen extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Loquen</h1>
                <img className="imgDetailLoquen" src={require("../../../img/ClubRMC/galopeursClub/loquen/loquen1.jpg")} alt="loquen"/>
                <p>1 course</p>
                <p>1 place</p>
            </div>
        )
    }
}

export default Loquen