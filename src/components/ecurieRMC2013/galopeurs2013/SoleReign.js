import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'

class SoleReign extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Sole Reign</h1>
                <img className="imgDetail" src={require("../../../img/RMC2013/galopeurs2013/sole/sole1.jpg")} alt="falcolina"/>
                <p>16 courses</p>
                <p>1 victoire à Chantilly</p>
                <p>1 places</p>
            </div>
        )
    }
}

export default SoleReign