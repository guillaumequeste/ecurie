import React, { Component } from 'react'
import Header from '../../Header'
import './Falcolina.css'

class Falcolina extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Falcolina</h1>
                <img className="imgDetail" src={require("../../../img/RMC2013/galopeurs2013/falcolina/falcolina1.jpg")} alt="falcolina"/>
                <p>12 courses</p>
                <p>2 victoires à Lyon-Parilly et Cagnes</p>
                <p>4 places</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2013/galopeurs2013/falcolina/falcolina2.jpg")} alt="falcolina2"/>
                    </div>
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2013/galopeurs2013/falcolina/falcolina3.jpg")} alt="falcolina3"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Falcolina