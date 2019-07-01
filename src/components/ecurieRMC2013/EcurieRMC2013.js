import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import './EcurieRMC2013.css'

class EcurieRMC2013 extends Component {
  
    render () {
        return (
            <div className="body2013">
                <Header />
                <div className="div2013">
                    <h1 className="titre2013">Ecurie RMC 2013</h1>
                    <div className="card" style={{width:'400px'}}>
                        <img className="card-img-top" src={require("../../img/2013/galopeurs2013/paint.jpg")} alt="paint" style={{width:'400px'}}/>
                        <div className="card-body" style={{backgroundColor:'grey',textAlign:'center'}}>
                            <Link to="/galopeurs2013" className="btn btn-primary">Galopeurs 2013</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EcurieRMC2013