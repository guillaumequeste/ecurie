import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'

class BaldiStar extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Baldi Star</h1>
                <img className="imgDetail" src={require("../../../img/RMC2014/trotteurs2014/baldi/baldi1.jpg")} alt="baldi_star"/>
                <p>17 courses</p>
                <p>2 victoires à Vichy et Châteaubriant</p>
                <p>8 places</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2014/trotteurs2014/baldi/baldi2.jpg")} alt="baldi_star2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BaldiStar