import React, { Component } from 'react'
import Header from '../../Header'

class DrakkarDeloClub extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Drakkar Delo (Club)</h1>
                <img className="imgDetail" src={require("../../../img/RMC2015/trotteurs2015/drakkar/drakkar2.jpg")} alt="drakkar_delo2"/>
                <p>12 courses</p>
                <p>2 places</p>
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

export default DrakkarDeloClub