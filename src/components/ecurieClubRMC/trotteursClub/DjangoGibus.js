import React, { Component } from 'react'
import Header from '../../Header'

class DjangoGibus extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Django Gibus</h1>
                <img className="imgDetailJurisprudance" src={require("../../../img/ClubRMC/trotteursClub/django/django1.jpg")} alt="django"/>
                <p>24 courses</p>
                <p>1 victoire à Montignac</p>
                <p>14 places</p>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/django/django2.jpg")} alt="django2"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/django/django3.jpg")} alt="django3"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/django/django4.jpg")} alt="django4"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/django/django5.jpg")} alt="django5"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/django/django6.jpg")} alt="django6"/>
                    </div>
                    <div className="col-sm-3">
                        <img className="imgDetail2" src={require("../../../img/ClubRMC/trotteursClub/django/django7.png")} alt="django7"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DjangoGibus