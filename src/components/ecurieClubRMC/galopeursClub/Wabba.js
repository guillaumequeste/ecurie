import React, { Component } from 'react'
import Header from '../../Header'
import './Wabba.css'

class Wabba extends Component {
  
    render () {
        return (
            <div className="bodyChevalWabba">
                <Header />
                <h1 className="nomCheval">Wabba</h1>
                <img className="imgDetail" src={require("../../../img/ClubRMC/galopeursClub/wabba/wabba1.jpg")} alt="wabba"/>
                <p>3 courses</p>
                <p>2 places</p>
            </div>
        )
    }
}

export default Wabba