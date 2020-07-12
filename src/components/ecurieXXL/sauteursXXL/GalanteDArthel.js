import React, { Component } from 'react'
import Header from '../../Header'
import './GalanteDArthel.css'

class GalanteDArthel extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Galante d'Arthel</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/galante/galante1.jpg")} alt="galante_d_arthel"/>
                <p>7 courses</p>
                <p>1 victoire à Cluny</p>
                <p>5 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/galante/galante2.jpg")} alt="galante2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default GalanteDArthel