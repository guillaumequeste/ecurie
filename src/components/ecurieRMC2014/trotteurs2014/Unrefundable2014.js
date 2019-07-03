import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'

class Unrefundable2014 extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Unrefundable (2014)</h1>
                <img className="imgDetail" src={require("../../../img/RMC2014/trotteurs2014/unrefundable/unrefundable6.jpg")} alt="unrefundable6"/>
                <p>20 courses</p>
                <p>4 victoires à Gournay-en-Bray, Cabourg, Amiens et Vincennes</p>
                <p>5 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/RMC2014/trotteurs2014/unrefundable/unrefundable1.jpg")} alt="unrefundable1"/>
                    </div>
                    <div className="col-sm-3">
                            <img className="imgDetail2" src={require("../../../img/RMC2014/trotteurs2014/unrefundable/unrefundable2.jpg")} alt="unrefundable2"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/RMC2014/trotteurs2014/unrefundable/unrefundable3.jpg")} alt="unrefundable3"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/RMC2014/trotteurs2014/unrefundable/unrefundable4.jpg")} alt="unrefundable4"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/RMC2014/trotteurs2014/unrefundable/unrefundable5.jpg")} alt="unrefundable5"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/RMC2014/trotteurs2014/unrefundable/unrefundable7.jpg")} alt="unrefundable7"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Unrefundable2014