import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './Benodet.css'

class Benodet extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Benodet</h1>
                <img className="imgDetail" src={require("../../../img/RMC2013/galopeurs2013/benodet/benodet1.jpeg")} alt="benodet"/>
                <p>12 courses</p>
                <p>2 victoires à Marseille-Borély et Compiègne</p>
                <p>7 places</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2013/galopeurs2013/benodet/benodet2.jpeg")} alt="benodet2"/>
                    </div>
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2013/galopeurs2013/benodet/benodet3.jpeg")} alt="benodet3"/>
                    </div>
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2013/galopeurs2013/benodet/benodet4.jpeg")} alt="benodet4"/>
                    </div>
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2013/galopeurs2013/benodet/benodet5.jpeg")} alt="benodet5"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Benodet