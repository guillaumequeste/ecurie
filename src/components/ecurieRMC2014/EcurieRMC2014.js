import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EcurieRMC2014 extends Component {
  
    render () {
        return (
            <div>
                <h1>Ecurie RMC 2014</h1>
                <Link to="/galopeurs2014">galopeurs 2014</Link>
                <Link to="/trotteurs2014">trotteurs 2014</Link>
            </div>
        )
    }
}

export default EcurieRMC2014