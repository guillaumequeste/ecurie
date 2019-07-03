import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'

class Arancio extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Arancio</h1>
                <img className="imgDetail" src={require("../../../img/RMC2014/trotteurs2014/arancio/arancio1.jpg")} alt="arancio"/>
                <p>8 courses</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2014/trotteurs2014/arancio/arancio2.jpg")} alt="arancio2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Arancio