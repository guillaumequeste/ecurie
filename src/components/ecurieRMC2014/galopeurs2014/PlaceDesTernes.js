import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './PlaceDesTernes.css'

class PlaceDesTernes extends Component {
  
    render () {
        return (
            <div className="bodyChevalPlaceDesTernes">
                <Header />
                <h1 className="nomCheval">Place des Ternes</h1>
                <img className="imgDetail" src={require("../../../img/RMC2014/galopeurs2014/place/place1.jpg")} alt="place_des_ternes"/>
                <p>5 courses</p>
                <p>1 place</p>
            </div>
        )
    }
}

export default PlaceDesTernes