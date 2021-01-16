import React, { Component } from 'react'
import Header from './Header'
import './Bilan.css'

class Bilan extends Component {
  
    render () {
        return (
            <div className="bodyBilan">
                <Header />
                <div className="divBilan">
                    <div className="result">
                        <p className="pReussite"><strong>RMC 2013</strong> : 107 courses, 7 victoires, 38 places</p>
                        <p className="reussite">42% de réussite (6,5% à la gagne)</p>
                    </div>
                    <hr />
                    <div className="result result2">
                        <p className="pReussite"><strong>RMC 2014</strong> : 191 courses, 20 victoires, 84 places</p>
                        <p className="reussite">54,4% de réussite (5,7% à la gagne)</p>
                    </div>
                    <hr />
                    <div className="result result2">
                        <p className="pReussite"><strong>RMC 2015</strong> : 78 courses, 9 victoires, 36 places</p>
                        <p className="reussite">57,6% de réussite (11,5% à la gagne)</p>
                    </div>
                    <hr />
                    <div className="result result2">
                        <p className="pReussite"><strong>Club RMC</strong> : 290 courses, 20 victoires, 142 places</p>
                        <p className="reussite">55,8% de réussite (6,8% à la gagne)</p>
                    </div>
                    <hr />
                    <div className="result result2">
                        <p className="pReussite"><strong>XXL</strong> : 75 courses, 9 victoires, 33 places</p>
                        <p className="reussite">56% de réussite (12% à la gagne)</p>
                    </div>
                    <hr />
                    <div className="result result2">
                        <p className="pReussite"><strong>Ecurie Top</strong> : 10 courses, 1 victoire, 6 places</p>
                        <p className="reussite">70% de réussite (10% à la gagne)</p>
                    </div>
                    <hr />
                    <div className="result result2">
                        <p className="pReussite"><strong>TOTAL</strong> : 753 courses, 66 victoires, 338 places</p>
                        <p className="reussite">53,6% de réussite (8,7% à la gagne)</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bilan