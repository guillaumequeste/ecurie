import React, { Component } from 'react'
import Header from '../../Header'
import './Gaspachos.css'

class Gaspachos extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Gaspacho's</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/gaspachos/gaspachos1.jpg")} alt="gaspachos"/>
                <p>4 courses</p>
                <p>1 place</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/gaspachos/gaspachos2.jpg")} alt="gaspachos2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gaspachos