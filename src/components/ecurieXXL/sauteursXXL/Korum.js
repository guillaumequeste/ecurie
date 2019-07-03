import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './Korum.css'

class Korum extends Component {
  
    render () {
        return (
            <div className="bodyChevalKorum">
                <Header />
                <h1 className="nomCheval">Korum</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/korum/korum1.jpg")} alt="korum"/>
            </div>
        )
    }
}

export default Korum