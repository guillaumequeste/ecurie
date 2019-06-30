import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EcurieClubRMC extends Component {
  
    render () {
        return (
            <div>
                <h1>Ecurie Club RMC</h1>
                <Link to="/galopeursClub">galopeurs club</Link>
                <Link to="/trotteursClub">trotteurs club</Link>
            </div>
        )
    }
}

export default EcurieClubRMC