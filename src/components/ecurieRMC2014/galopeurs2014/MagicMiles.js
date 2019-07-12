import React, { Component } from 'react'
import Header from '../../Header'
import './MagicMiles.css'

class MagicMiles extends Component {
  
    render () {
        return (
            <div className="bodyChevalMagicMiles">
                <Header />
                <h1 className="nomCheval">Magic Miles</h1>
                <img className="imgDetail" src={require("../../../img/RMC2014/galopeurs2014/magic/magic1.jpg")} alt="magic_miles"/>
                <p>10 courses</p>
                <p>1 victoire à Maisons-Laffitte</p>
                <p>4 places</p>
            </div>
        )
    }
}

export default MagicMiles