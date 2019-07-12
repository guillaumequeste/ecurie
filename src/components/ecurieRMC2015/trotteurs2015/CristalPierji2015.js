import React, { Component } from 'react'
import Header from '../../Header'
import './CristalPierji2015.css'

class CristalPierji2015 extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Cristal Pierji (2015)</h1>
                <img className="imgDetailCristalPierji2015" src={require("../../../img/RMC2015/trotteurs2015/cristal/cristal2.jpeg")} alt="cristal_pierji2"/>
                <p>11 courses</p>
                <p>3 victoires à Vincennes, Marseille-Vivaux et Lyon-Parilly</p>
                <p>5 places</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2015/trotteurs2015/cristal/cristal1.jpg")} alt="cristal_pierji1"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CristalPierji2015