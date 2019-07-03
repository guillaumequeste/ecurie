import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './MySoul.css'

class MySoul extends Component {
  
    render () {
        return (
            <div className="bodyChevalMySoul">
                <Header />
                <h1 className="nomCheval">My Soul</h1>
                <img className="imgDetailMySoul" src={require("../../../img/ClubRMC/galopeursClub/mysoul/mysoul1.jpg")} alt="my_soul"/>
                <p>7 courses</p>
                <p>4 places</p>
            </div>
        )
    }
}

export default MySoul