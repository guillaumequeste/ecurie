import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EcurieRMC2014Galopeurs extends Component {
  
    render () {
        return (
            <div>
                <h1>2014 Galopeurs</h1>
                <Link to="/bowmore">Bowmore</Link>
                <Link to="/claudia_eria">Claudia Eria</Link>
                <Link to="/kilava">Kilava</Link>
                <Link to="/magic_miles">Magic Miles</Link>
                <Link to="/place_des_ternes">Place des Ternes</Link>
                <Link to="/pont_marie">Pont Marie</Link>
                <Link to="/race_for_fame">Race For Fame</Link>
            </div>
        )
    }
}

export default EcurieRMC2014Galopeurs