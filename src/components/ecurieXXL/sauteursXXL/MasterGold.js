import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './MasterGold.css'

class MasterGold extends Component {
  
    render () {
        return (
            <div className="bodyChevalMasterGold">
                <Header />
                <h1 className="nomCheval">Master Gold</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/master/master1.jpg")} alt="master_gold"/>
            </div>
        )
    }
}

export default MasterGold