import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EcurieClubRMCGalopeurs extends Component {
  
    render () {
        return (
            <div>
                <h1>Ecurie Club RMC Galopeurs</h1>
                <Link to="/al_rassoul">Al Rassoul</Link>
                <Link to="/cayo_coco">Cayo Coco</Link>
                <Link to="/dalkelef">Dalkelef</Link>
                <Link to="/diva_du_dancing">Diva du Dancing</Link>
                <Link to="/envergure">Envergure</Link>
                <Link to="/jurisprudance">Jurisprudance</Link>
                <Link to="/loquen">Loquen</Link>
                <Link to="/my_soul">My Soul</Link>
                <Link to="/mysaan">Mysaan</Link>
                <Link to="/saam">Saam</Link>
                <Link to="/wabba">Wabba</Link>
            </div>
        )
    }
}

export default EcurieClubRMCGalopeurs