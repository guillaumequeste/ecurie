import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './TChoupiChop.css'

class TChoupiChop extends Component {
  
    render () {
        return (
            <div className="bodyChevalTChoupiChop">
                <Header />
                <h1 className="nomCheval">T'Choupi Chop</h1>
                <img className="imgDetail" src={require("../../../img/RMC2013/galopeurs2013/tchoupi/tchoupi1.jpg")} alt="tchoupi"/>
                <p>8 courses</p>
                <p>1 place</p>
            </div>
        )
    }
}

export default TChoupiChop