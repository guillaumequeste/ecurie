import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './BellePromesse.css'

class BellePromesse extends Component {
  
    render () {
        return (
            <div className="bodyChevalBellePromesse">
                <Header />
                <h1 className="nomCheval">Belle Promesse</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/belle/belle1.jpg")} alt="belle_promesse"/>
            </div>
        )
    }
}

export default BellePromesse