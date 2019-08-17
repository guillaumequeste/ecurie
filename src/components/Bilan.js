import React, { Component } from 'react'
import Header from './Header'
import './Bilan.css'

class Bilan extends Component {
  
    render () {
        return (
            <div className="bodyBilan">
                <Header />
                <div className="divBilan">
                    <p><strong>RMC 2013</strong> : 105 courses, 7 victoires, 36 places</p>
                    <p><strong>RMC 2014</strong> : 191 courses, 20 victoires, 83 places</p>
                    <p><strong>RMC 2015</strong> : 78 courses, 9 victoires, 36 places</p>
                    <p><strong>Club RMC</strong> : 231 courses, 13 victoires, 114 places</p>
                    <p><strong>XXL</strong> : 8 courses, 4 places</p>
                </div>
            </div>
        )
    }
}

export default Bilan