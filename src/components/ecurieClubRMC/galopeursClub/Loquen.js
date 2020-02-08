import React, { Component } from 'react'
import Header from '../../Header'
import './Loquen.css'

class Loquen extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Loquen</h1>
                <img className="imgDetailLoquen" src={require("../../../img/ClubRMC/galopeursClub/loquen/loquen1.jpg")} alt="loquen"/>
                <p>4 courses</p>
                <p>1 victoire à Chantilly</p>
                <p>2 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/galopeursClub/loquen/loquen2.jpg")} alt="loquen2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loquen