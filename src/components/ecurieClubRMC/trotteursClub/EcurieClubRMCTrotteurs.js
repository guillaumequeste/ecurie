import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EcurieClubRMCTrotteurs extends Component {
  
    render () {
        return (
            <div>
                <h1>Ecurie Club RMC Trotteurs</h1>
                <Link to="/cristal_pierjiClub">Cristal Pierji</Link>
                <Link to="/django_gibus">Django Gibus</Link>
                <Link to="/domino_de_larre">Domino de Larré</Link>
                <Link to="/drakkar_deloClub">Drakkar Delo</Link>
                <Link to="/eclipse_somolli">Eclipse Somolli</Link>
            </div>
        )
    }
}

export default EcurieClubRMCTrotteurs