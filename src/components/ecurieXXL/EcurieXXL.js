import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EcurieXXL extends Component {
  
    render () {
        return (
            <div>
                <h1>Ecurie XXL</h1>
                <Link to="/sauteursXXL">sauteurs XXL</Link>
            </div>
        )
    }
}

export default EcurieXXL