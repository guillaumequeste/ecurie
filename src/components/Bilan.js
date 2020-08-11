import React, { Component } from 'react'
import Header from './Header'
import './Bilan.css'

class Bilan extends Component {
  
    render () {
        return (
            <div className="bodyBilan">
                <Header />
                <div className="divBilan">
                    <p><strong>RMC 2013</strong> : 107 courses, 7 victoires, 38 places</p>
                    <p><strong>RMC 2014</strong> : 191 courses, 20 victoires, 84 places</p>
                    <p><strong>RMC 2015</strong> : 78 courses, 9 victoires, 36 places</p>
                    <p><strong>Club RMC</strong> : 290 courses, 20 victoires, 142 places</p>
                    <p><strong>XXL</strong> : 52 courses, 4 victoires, 26 places</p>
                </div>
            </div>
        )
    }
}

export default Bilan