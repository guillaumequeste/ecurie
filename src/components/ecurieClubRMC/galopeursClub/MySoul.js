import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './MySoul.css'

class MySoul extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">My Soul</h1>
                <img className="imgDetailMySoul" src={require("../../../img/ClubRMC/galopeursClub/mysoul/mysoul2.png")} alt="my_soul2"/>
                <p>7 courses</p>
                <p>4 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/galopeursClub/mysoul/mysoul1.jpg")} alt="my_soul1"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MySoul