import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './Dalkelef.css'

class Dalkelef extends Component {
  
    render () {
        return (
            <div className="bodyChevalDalkelef">
                <Header />
                <h1 className="nomCheval">Dalkelef</h1>
                <img className="imgDetail" src={require("../../../img/ClubRMC/galopeursClub/dalkelef/dalkelef1.jpg")} alt="dalkelef"/>
                <p>2 courses</p>
            </div>
        )
    }
}

export default Dalkelef