import React, { Component } from 'react'
import Header from '../../Header'
import './Korum.css'

class Korum extends Component {
  
    render () {
        return (
            <div className="bodyChevalKorum">
                <Header />
                <h1 className="nomCheval">Korum</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/korum/korum1.jpg")} alt="korum"/>
                <p>2 courses</p>
                <p>1 place</p>
            </div>
        )
    }
}

export default Korum