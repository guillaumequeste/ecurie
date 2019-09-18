import React, { Component } from 'react'
import Header from '../../Header'
import './PanDiStelle.css'

class PanDiStelle extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Pan Di Stelle</h1>
                <img className="imgDetail" src={require("../../../img/RMC2013/galopeurs2013/pan/pan1.jpg")} alt="pan"/>
                <p>16 courses</p>
                <p>1 victoire à Longchamp</p>
                <p>9 places</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2013/galopeurs2013/pan/pan2.jpg")} alt="pan2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PanDiStelle