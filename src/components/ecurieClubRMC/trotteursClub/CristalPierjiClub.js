import React, { Component } from 'react'
import Header from '../../Header'
import './CristalPierjiClub.css'

class CristalPierjiClub extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Cristal Pierji (Club)</h1>
                <img className="imgDetailCristalPierjiClub" src={require("../../../img/ClubRMC/trotteursClub/cristal/cristal2.jpeg")} alt="cristal2"/>
                <p>54 courses</p>
                <p>1 victoire à Cagnes</p>
                <p>34 places</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2015/trotteurs2015/cristal/cristal1.jpg")} alt="cristal_pierji1"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CristalPierjiClub