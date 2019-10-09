import React, { Component } from 'react'
import Header from '../../Header'
import './BellePromesse.css'

class BellePromesse extends Component {
  
    render () {
        return (
            <div className="bodyChevalBellePromesse">
                <Header />
                <h1 className="nomCheval">Belle Promesse</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/belle/belle1.jpg")} alt="belle_promesse"/>
                <p>1 course</p>
                <p>1 place</p>
            </div>
        )
    }
}

export default BellePromesse