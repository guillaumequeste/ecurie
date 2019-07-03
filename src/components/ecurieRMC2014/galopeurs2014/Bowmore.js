import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './Bowmore.css'

class Bowmore extends Component {
  
    render () {
        return (
            <div className="bodyChevalBowmore">
                <Header />
                <h1 className="nomCheval">Bowmore</h1>
                <img className="imgDetail" src={require("../../../img/RMC2014/galopeurs2014/bowmore/bowmore1.jpg")} alt="bowmore"/>
                <p>18 courses</p>
                <p>1 victoire à Cagnes</p>
                <p>9 places</p>
            </div>
        )
    }
}

export default Bowmore