import React, { Component } from 'react'
import Header from '../../Header'
import './Kingdor.css'

class Kingdor extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Kingdor</h1>
                <img className="imgDetail" src={require("../../../img/Top/galopTop/kingdor/kingdor01.jpg")} alt="kingdor01"/>
                <p>1 course</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/Top/galopTop/kingdor/kingdor02.jpg")} alt="kingdor02"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/Top/galopTop/kingdor/kingdor03.jpg")} alt="kingdor03"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/Top/galopTop/kingdor/kingdor04.jpg")} alt="kingdor04"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/Top/galopTop/kingdor/kingdor05.jpg")} alt="kingdor05"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Kingdor