import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class EcurieRMC2013Galopeurs extends Component {
  
    render () {
        return (
            <div>
                <Link to="/benodet">Benodet</Link>
                <Link to="/falcolina">Falcolina</Link>
                <Link to="/pan_di_stelle">Pan_di_stelle</Link>
                <Link to="/pedregalejo">Pedregalejo</Link>
                <Link to="/shingueti">Shingueti</Link>
                <Link to="/sole_reign">Sole Reign</Link>
                <Link to="/solside">Solside</Link>
                <Link to="/sweet_smoke">Sweet Smoke</Link>
                <Link to="/tchoupi_chop">T'Choupi Chop</Link>
            </div>
        )
    }
}

export default EcurieRMC2013Galopeurs