import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'

class Solside extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Solside</h1>
                <img className="imgDetail" src={require("../../../img/RMC2013/galopeurs2013/solside/solside1.jpg")} alt="falcolina"/>
                <p>2 courses</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2013/galopeurs2013/solside/solside2.jpg")} alt="solside2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Solside