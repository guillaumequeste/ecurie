import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './CristalPierjiClub.css'

class CristalPierjiClub extends Component {
  
    render () {
        return (
            <div className="bodyChevalCristalPierjiClub">
                <Header />
                <h1 className="nomCheval">Cristal Pierji</h1>
                <img className="imgDetailCristalPierjiClub" src={require("../../../img/ClubRMC/trotteursClub/cristal/cristal1.jpg")} alt="cristal"/>
                <p>44 courses</p>
                <p>1 victoire à Cagnes</p>
                <p>29 places</p>
            </div>
        )
    }
}

export default CristalPierjiClub