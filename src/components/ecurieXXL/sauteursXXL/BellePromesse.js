import React, { Component } from 'react'
import Header from '../../Header'
import './BellePromesse.css'

class BellePromesse extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Belle Promesse</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/belle/belle1.jpg")} alt="belle_promesse"/>
                <p>2 courses</p>
                <p>2 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/belle/belle2.jpg")} alt="belle1"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/belle/belle3.jpg")} alt="belle3"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/belle/belle4.jpg")} alt="belle4"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BellePromesse