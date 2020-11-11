import React, { Component } from 'react'
import Header from '../../Header'
import './JolyAndBach.css'

class JolyAndBach extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Joly And Bach</h1>
                <img className="imgDetailJolyAndBach" src={require("../../../img/XXL/sauteursXXL/joly/joly1.jpg")} alt="joly1"/>
                <p>5 courses</p>
                <p>2 victoires à Paray-le-Monial et Strasbourg</p>
                <p>1 place</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/joly/joly2.jpg")} alt="joly2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default JolyAndBach