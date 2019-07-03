import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './PontMarie.css'

class PontMarie extends Component {
  
    render () {
        return (
            <div className="bodyChevalPontMarie">
                <Header />
                <h1 className="nomCheval">Pont Marie</h1>
                <img className="imgDetail" src={require("../../../img/RMC2014/galopeurs2014/pont/pont1.jpg")} alt="pont_marie"/>
                <p>5 courses</p>
                <p>1 victoire à La Teste</p>
                <p>2 places</p>
            </div>
        )
    }
}

export default PontMarie