import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './Mysaan.css'

class Mysaan extends Component {
  
    render () {
        return (
            <div className="bodyChevalLoquen">
                <Header />
                <h1 className="nomCheval">Mysaan</h1>
                <img className="imgDetail" src={require("../../../img/ClubRMC/galopeursClub/mysaan/mysaan1.jpg")} alt="mysaan"/>
                <p>5 courses</p>
                <p>1 place</p>
            </div>
        )
    }
}

export default Mysaan