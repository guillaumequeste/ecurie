import React, { Component } from 'react'
import Header from '../../Header'
import './ElcondorForlonge.css'

class ElcondorForlonge extends Component {
  
    render () {
        return (
            <div className="bodyChevalElcondorForlonge">
                <Header />
                <h1 className="nomCheval">Elcond'Or Forlonge</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/elcondor/elcondor1.jpg")} alt="elcondor_forlonge"/>
                <p>2 courses</p>
                <p>1 place</p>
            </div>
        )
    }
}

export default ElcondorForlonge