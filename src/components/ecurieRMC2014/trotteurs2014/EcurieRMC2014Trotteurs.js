import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EcurieRMC2014Trotteurs extends Component {
  
    render () {
        return (
            <div>
                <h1>Ecurie RMC 2014 Trotteurs</h1>
                <Link to="/arancio">Arancio</Link>
                <Link to="/auteur2014"> Auteur</Link>
                <Link to="/baldi_star">Baldi Star</Link>
                <Link to="/borsalino_du_jal">Borsalino du Jal</Link>
                <Link to="/unrefundable2014">Unrefundable</Link>
            </div>
        )
    }
}

export default EcurieRMC2014Trotteurs