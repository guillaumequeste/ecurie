import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './Beynostorm.css'

class Beynostorm extends Component {
  
    render () {
        return (
            <div className="bodyChevalBeynostorm">
                <Header />
                <h1 className="nomCheval">Beynostorm</h1>
                <img className="imgDetail" src={require("../../../img/RMC2015/galopeurs2015/beynostorm/beynostorm1.jpg")} alt="beynostorm"/>
                <p>1 course</p>
            </div>
        )
    }
}

export default Beynostorm