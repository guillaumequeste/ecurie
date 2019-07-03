import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './ClaudiaEria.css'

class ClaudiaEria extends Component {
  
    render () {
        return (
            <div className="bodyChevalClaudia">
                <Header />
                <h1 className="nomCheval">Claudia Eria</h1>
                <img className="imgDetail" src={require("../../../img/RMC2014/galopeurs2014/claudia/claudia1.jpg")} alt="claudia"/>
                <p>26 courses</p>
                <p>12 places</p>
            </div>
        )
    }
}

export default ClaudiaEria