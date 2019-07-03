import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './CristalPierji2015.css'

class CristalPierji2015 extends Component {
  
    render () {
        return (
            <div className="bodyChevalCristalPierji2015">
                <Header />
                <h1 className="nomCheval">Cristal Pierji (2015)</h1>
                <img className="imgDetailCristalPierji2015" src={require("../../../img/RMC2015/trotteurs2015/cristal/cristal1.jpg")} alt="cristal_pierji"/>
                <p>11 courses</p>
                <p>3 victoires à Vincennes, Marseille-Vivaux et Lyon-Parilly</p>
                <p>5 places</p>
            </div>
        )
    }
}

export default CristalPierji2015