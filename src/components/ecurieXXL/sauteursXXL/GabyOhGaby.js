import React, { Component } from 'react'
import Header from '../../Header'
import './GabyOhGaby.css'

class Loquen extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Gaby Oh Gaby</h1>
                <img className="imgDetailGabyOhGaby" src={require("../../../img/XXL/sauteursXXL/gaby/gaby1.jpg")} alt="gaby1"/>
                <p>1 course</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/gaby/gaby2.jpg")} alt="gaby2"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/gaby/gaby3.jpg")} alt="gaby3"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loquen