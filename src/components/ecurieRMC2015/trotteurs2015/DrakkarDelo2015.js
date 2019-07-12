import React, { Component } from 'react'
import Header from '../../Header'

class DrakkarDelo2015 extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Drakkar Delo (2015)</h1>
                <img className="imgDetail" src={require("../../../img/RMC2015/trotteurs2015/drakkar/drakkar2.jpg")} alt="drakkar_delo2"/>
                <p>8 courses</p>
                <p>1 victoire à Pornichet</p>
                <p>4 places</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2015/trotteurs2015/drakkar/drakkar1.jpg")} alt="drakkar_delo1"/>
                    </div>
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2015/trotteurs2015/drakkar/drakkar3.jpg")} alt="drakkar_delo3"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DrakkarDelo2015