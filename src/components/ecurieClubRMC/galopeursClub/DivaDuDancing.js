import React, { Component } from 'react'
import Header from '../../Header'
import './DivaDuDancing.css'

class DivaDuDancing extends Component {
  
    render () {
        return (
            <div className="bodyChevalDivaDuDancing">
                <Header />
                <h1 className="nomCheval">Diva du Dancing</h1>
                <img className="imgDetail" src={require("../../../img/ClubRMC/galopeursClub/diva/diva1.jpg")} alt="diva_du_dancing"/>
                <p>2 courses</p>
                <p>2 places</p>
            </div>
        )
    }
}

export default DivaDuDancing