import React, { Component } from 'react'
import { Link } from "react-router-dom"

class Home extends Component {
  
    render () {
        return (
            <div>
                <h1>Home</h1>
                <Link to="/ecurieRMC2013">Ecurie RMC 2013</Link>
                <Link to="/ecurieRMC2014">Ecurie RMC 2014</Link>
                <Link to="/ecurieRMC2015">Ecurie RMC 2015</Link>
                <Link to="/ecurieClubRMC">Ecurie Club RMC</Link>
                <Link to="/ecurieXXL">Ecurie XXL</Link>
            </div>
        )
    }
}

export default Home