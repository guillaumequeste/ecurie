import React, { Component } from 'react'
import Header from '../../Header'
import './Shingueti.css'

class Shingueti extends Component {
  
    render () {
        return (
            <div className="bodyChevalShingueti">
                <Header />
                <h1 className="nomCheval">Shingueti</h1>
                <img className="imgDetail" src={require("../../../img/RMC2013/galopeurs2013/shingueti/shingueti1.jpg")} alt="falcolina"/>
                <p>12 courses</p>
                <p>3 places</p>
            </div>
        )
    }
}

export default Shingueti