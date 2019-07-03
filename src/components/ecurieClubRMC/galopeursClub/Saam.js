import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './Saam.css'

class Saam extends Component {
  
    render () {
        return (
            <div className="bodyChevalSaam">
                <Header />
                <h1 className="nomCheval">Saam</h1>
                <img className="imgDetail" src={require("../../../img/ClubRMC/galopeursClub/saam/saam1.jpg")} alt="saam"/>
                <p>3 courses</p>
                <p>1 place</p>
            </div>
        )
    }
}

export default Saam