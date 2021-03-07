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
                <p>7 courses</p>
                <p>2 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/master/master2.jpg")} alt="master2"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/master/master3.jpg")} alt="master3"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/XXL/sauteursXXL/master/master4.jpg")} alt="master4"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MasterGold