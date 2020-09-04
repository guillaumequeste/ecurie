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
                    <p className="reussite">42% de réussite (6,5% à la gagne)</p>
                    <p><strong>RMC 2014</strong> : 191 courses, 20 victoires, 84 places</p>
                    <p className="reussite">54,4% de réussite (5,7% à la gagne)</p>
                    <p><strong>RMC 2015</strong> : 78 courses, 9 victoires, 36 places</p>
                    <p className="reussite">57,6% de réussite (11,5% à la gagne)</p>
                    <p><strong>Club RMC</strong> : 290 courses, 20 victoires, 142 places</p>
                    <p className="reussite">55,8% de réussite (6,8% à la gagne)</p>
                    <p><strong>XXL</strong> : 58 courses, 5 victoires, 27 places</p>
                    <p className="reussite">55,1% de réussite (8,6% à la gagne)</p>
                    <p><strong>Ecurie Top</strong> : 1 course, 1 place</p>
                    <p className="reussite">100% de réussite (0% à la gagne)</p>
                    <p><strong>TOTAL</strong> : 725 courses, 61 victoires, 328 places</p>
                    <p className="reussite">53,6% de réussite (8,4% à la gagne)</p>
                </div>
            </div>
        )
    }
}

export default Bilan