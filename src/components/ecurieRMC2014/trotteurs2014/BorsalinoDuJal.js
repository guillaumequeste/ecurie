import React, { Component } from 'react'
import Header from '../../Header'

class BorsalinoDuJal extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Borsalino du Jal</h1>
                <img className="imgDetail" src={require("../../../img/RMC2014/trotteurs2014/borsalino/borsalino1.jpg")} alt="borsalino_du_jal"/>
                <p>20 courses</p>
                <p>4 victoires à Gournay-en-Bray, Cabourg, Amiens et Vincennes</p>
                <p>5 places</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2014/trotteurs2014/borsalino/borsalino2.jpg")} alt="borsalino_du_jal2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BorsalinoDuJal