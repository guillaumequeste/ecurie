import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './CountessAllegro.css'

class CountessAllegro extends Component {
  
    render () {
        return (
            <div className="bodyChevalCountessAllegro">
                <Header />
                <h1 className="nomCheval">Countess Allegro</h1>
                <img className="imgDetail" src={require("../../../img/RMC2015/galopeurs2015/countess/countess1.jpg")} alt="countess_allegro"/>
                <p>13 courses</p>
                <p>6 places</p>
            </div>
        )
    }
}

export default CountessAllegro