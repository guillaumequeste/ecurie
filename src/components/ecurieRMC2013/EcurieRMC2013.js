import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EcurieRMC2013 extends Component {
  
    render () {
        return (
            <div>
                <h1>Ecurie RMC 2013</h1>
                <Link to="/galopeurs2013">Galopeurs</Link>
            </div>
        )
    }
}

export default EcurieRMC2013