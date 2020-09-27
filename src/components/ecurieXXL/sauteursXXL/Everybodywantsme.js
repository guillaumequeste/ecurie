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
                <p>4 courses</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/everybody/everybody2.jpg")} alt="everybodywantsme2"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/everybody/everybody3.jpg")} alt="everybodywantsme3"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/everybody/everybody4.jpg")} alt="everybodywantsme4"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Everybodywantsme