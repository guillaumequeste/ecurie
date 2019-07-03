import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './ParkSquare.css'

class ParkSquare extends Component {
  
    render () {
        return (
            <div className="bodyChevalParkSquare">
                <Header />
                <h1 className="nomCheval">Park quare</h1>
                <img className="imgDetailParkSquare" src={require("../../../img/RMC2015/galopeurs2015/park/park1.jpg")} alt="park_square"/>
                <p>9 courses</p>
                <p>2 places</p>
            </div>
        )
    }
}

export default ParkSquare