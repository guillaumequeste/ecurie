import React, { Component } from 'react'
import Header from '../../Header'

class CayoCoco extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Cayo Coco</h1>
                <img className="imgDetail" src={require("../../../img/ClubRMC/galopeursClub/cayo/cayo1.jpg")} alt="cayo_coco"/>
                <p>15 courses</p>
                <p>3 victoires à Amiens, Chantilly et Longchamp (Q+)</p>
                <p>6 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/galopeursClub/cayo/cayo2.jpg")} alt="cayo_coco2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CayoCoco