import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'

class Envergure extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Envergure</h1>
                <img className="imgDetail" src={require("../../../img/ClubRMC/galopeursClub/envergure/envergure1.jpg")} alt="envergure"/>
                <p>10 courses</p>
                <p>1 victoire à Fontainebleau</p>
                <p>5 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/galopeursClub/envergure/envergure2.jpg")} alt="envergure2"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/galopeursClub/envergure/envergure3.jpg")} alt="envergure3"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Envergure