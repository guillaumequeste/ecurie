import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './ValleyKid.css'

class ValleyKid extends Component {
  
    render () {
        return (
            <div className="bodyChevalCountessAllegro">
                <Header />
                <h1 className="nomCheval">Valley Kid</h1>
                <img className="imgDetail" src={require("../../../img/RMC2015/galopeurs2015/valley/valley1.jpg")} alt="valley_kid"/>
                <p>11 courses</p>
                <p>2 victoires à Deauville</p>
                <p>5 places</p>
            </div>
        )
    }
}

export default ValleyKid