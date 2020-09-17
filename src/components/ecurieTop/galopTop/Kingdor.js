import React, { Component } from 'react'
import Header from '../../Header'
import './Kingdor.css'

class Kingdor extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Highlands d'Allier</h1>
                <img className="imgDetail" src={require("../../../img/Top/galopTop/kingdor/kingdor01.jpg")} alt="kingdor01"/>
            </div>
        )
    }
}

export default Kingdor