import React, { Component } from 'react'
import Header from '../../Header'

class Kilava extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Kilava</h1>
                <img className="imgDetail" src={require("../../../img/RMC2014/galopeurs2014/kilava/kilava1.jpg")} alt="kilava"/>
                <p>9 courses</p>
                <p>2 victoires à Chantilly</p>
                <p>4 places</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2014/galopeurs2014/kilava/kilava2.jpg")} alt="kilava2"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Kilava