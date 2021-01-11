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
                <p>13 courses</p>
                <p>2 victoires à Cluny et Paray-le-Monial</p>
                <p>8 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/galante/galante2.jpg")} alt="galante2"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/galante/galante3.jpg")} alt="galante3"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/galante/galante4.jpg")} alt="galante4"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/galante/galante5.jpg")} alt="galante5"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/galante/galante6.jpg")} alt="galante6"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default GalanteDArthel