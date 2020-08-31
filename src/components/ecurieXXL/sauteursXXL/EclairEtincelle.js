import React, { Component } from 'react'
import Header from '../../Header'
import './EclairEtincelle.css'

class EclairEtincelle extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Eclair Etincelle</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/eclair/eclair1.jpg")} alt="eclair_etincelle"/>
                <p>6 courses</p>
                <p>1 victoire à Sablé-sur-Sarthe</p>
                <p>1 place</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/eclair/eclair2.jpg")} alt="eclair2"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/eclair/eclair3.jpg")} alt="eclair3"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/eclair/eclair4.jpg")} alt="eclair4"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/eclair/eclair5.jpg")} alt="eclair5"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default EclairEtincelle