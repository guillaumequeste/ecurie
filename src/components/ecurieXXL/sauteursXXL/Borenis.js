import React, { Component } from 'react'
import Header from '../../Header'
import './Borenis.css'

class Borenis extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Borenis</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/borenis/borenis1.jpg")} alt="borenis"/>
                <p>7 courses</p>
                <p>5 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/borenis/borenis2.jpg")} alt="borenis2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Borenis