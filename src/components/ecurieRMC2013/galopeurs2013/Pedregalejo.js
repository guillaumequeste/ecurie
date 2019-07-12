import React, { Component } from 'react'
import Header from '../../Header'
import './Pedregalejo.css'

class Pedregalejo extends Component {
  
    render () {
        return (
            <div className="bodyCheval">
                <Header />
                <h1 className="nomCheval">Pedregalejo</h1>
                <img className="imgDetail" src={require("../../../img/RMC2013/galopeurs2013/pedregalejo/pedregalejo1.jpg")} alt="pedregalejo"/>
                <p>14 courses</p>
                <p>1 victoire à Evreux</p>
                <p>5 places</p>
                <div className="row">
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2013/galopeurs2013/pedregalejo/pedregalejo2.jpeg")} alt="pedregalejo2"/>
                    </div>
                    <div className="col-sm-3">
                    <img className="imgDetail2" src={require("../../../img/RMC2013/galopeurs2013/pedregalejo/pedregalejo3.jpg")} alt="pedregalejo3"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pedregalejo