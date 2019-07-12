import React, { Component } from 'react'
import Header from '../../Header'

class RaceForFame extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Race For Fame</h1>
                <img className="imgDetail" src={require("../../../img/RMC2014/galopeurs2014/race/race1.jpg")} alt="race_for_fame"/>
                <p>19 courses</p>
                <p>1 victoire à Argentan</p>
                <p>6 places</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2014/galopeurs2014/race/race2.jpg")} alt="race_for_fame2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default RaceForFame