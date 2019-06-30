import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EcurieRMC2015Galopeurs extends Component {
  
    render () {
        return (
            <div>
                <h1>Ecurie RMC 2015 Galopeurs</h1>
                <Link to="/beynostorm">Beynostorm</Link>
                <Link to="/countess_allegro">Countess Allegro</Link>
                <Link to="/park_square">Park Square</Link>
                <Link to="/valley_kid">Valley Kid</Link>
            </div>
        )
    }
}

export default EcurieRMC2015Galopeurs