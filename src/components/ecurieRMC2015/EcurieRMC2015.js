import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EcurieRMC2015 extends Component {
  
    render () {
        return (
            <div>
                <h1>Ecurie RMC 2015</h1>
                <Link to="/galopeurs2015">galopeurs 2015</Link>
                <Link to="/trotteurs2015">trotteurs 2015</Link>
            </div>
        )
    }
}

export default EcurieRMC2015