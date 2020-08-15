import React, { Component } from 'react'
import Header from '../../Header'
import './JolyAndBach.css'

class JolyAndBach extends Component {
  
    render () {
        return (
            <div className="bodyChevalJolyAndBach">
                <Header />
                <h1 className="nomCheval">Joly And Bach</h1>
                <img className="imgDetailJolyAndBach" src={require("../../../img/XXL/sauteursXXL/joly/joly1.jpg")} alt="joly_and_bach"/>
                <p>1 course</p>
            </div>
        )
    }
}

export default JolyAndBach