import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './Loquen.css'

class Loquen extends Component {
  
    render () {
        return (
            <div className="bodyChevalLoquen">
                <Header />
                <h1 className="nomCheval">Loquen</h1>
                <img className="imgDetail" src={require("../../../img/ClubRMC/galopeursClub/loquen/loquen1.jpg")} alt="loquen"/>
                <p>1 course</p>
                <p>1 place</p>
            </div>
        )
    }
}

export default Loquen