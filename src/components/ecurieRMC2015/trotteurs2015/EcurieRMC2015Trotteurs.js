import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EcurieRMC2015Trotteurs extends Component {
  
    render () {
        return (
            <div>
                <h1>Ecurie RMC 2015 Trotteurs</h1>
                <Link to="/auteur2015">Auteur</Link>
                <Link to="/cristal_pierji2015">Cristal Pierji</Link>
                <Link to="/drakkar_delo2015">Drakkar Delo</Link>
                <Link to="/unrefundable2015">Unrefundable</Link>
            </div>
        )
    }
}

export default EcurieRMC2015Trotteurs