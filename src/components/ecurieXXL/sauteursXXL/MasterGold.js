import React, { Component } from 'react'
import Header from '../../Header'
import './MasterGold.css'

class MasterGold extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Master Gold</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/master/master1.jpg")} alt="master1"/>
                <p>2 courses</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/master/master2.jpg")} alt="master2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MasterGold