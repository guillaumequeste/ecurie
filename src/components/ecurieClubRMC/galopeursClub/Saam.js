import React, { Component } from 'react'
import Header from '../../Header'
import './Saam.css'

class Saam extends Component {
  
    render () {
        return (
            <div className="bodyChevalSaam">
                <Header />
                <h1 className="nomCheval">Saam</h1>
                <img className="imgDetail" src={require("../../../img/ClubRMC/galopeursClub/saam/saam1.jpg")} alt="saam"/>
                <p>10 courses</p>
                <p>1 victoire à Pornichet</p>
                <p>6 places</p>
            </div>
        )
    }
}

export default Saam