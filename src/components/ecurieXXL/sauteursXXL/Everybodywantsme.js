import React, { Component } from 'react'
import Header from '../../Header'
import './Everybodywantsme.css'

class Everybodywantsme extends Component {
  
    render () {
        return (
            <div className="bodyChevalEverybodywantsme">
                <Header />
                <h1 className="nomCheval">Everybodywantsme</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/everybody/everybody1.jpg")} alt="everybodywantsme"/>
            </div>
        )
    }
}

export default Everybodywantsme