import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import './CristalPierji.css'

class CristalPierji extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Cristal Pierji</h1>
                <img className="imgDetailCristalPierji" src={require("../img/RMC2015/trotteurs2015/cristal/cristal2.jpeg")} alt="cristal_pierji2"/>
                <p>56 courses</p>
                <p>4 victoires à Vincennes, Marseille-Vivaux, Lyon-Parilly et Cagnes</p>
                <p>34 places</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../img/RMC2015/trotteurs2015/cristal/cristal1.jpg")} alt="cristal_pierji1"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CristalPierji