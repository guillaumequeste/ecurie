import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'

class SweetSmoke extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Sweet Smoke</h1>
                <img className="imgDetail" src={require("../../../img/RMC2013/galopeurs2013/sweet/sweet1.jpg")} alt="sweet"/>
                <p>15 courses</p>
                <p>8 places</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2013/galopeurs2013/sweet/sweet2.jpg")} alt="sweet2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SweetSmoke