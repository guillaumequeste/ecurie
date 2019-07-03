import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'

class DjangoGibus extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Django Gibus</h1>
                <img className="imgDetailJurisprudance" src={require("../../../img/ClubRMC/trotteursClub/django/django1.jpg")} alt="django"/>
                <p>17 courses</p>
                <p>11 places</p>
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
            </div>
        )
    }
}

export default DjangoGibus