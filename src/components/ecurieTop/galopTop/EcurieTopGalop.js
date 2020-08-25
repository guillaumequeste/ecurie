import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './EcurieTopGalop.css'

class EcurieTopGalop extends Component {
  
    render () {
        return (
            <div className="bodyGalopeurs2013">
                <Header />
                <h1 className="titreGalopeurs2013">Ecurie Top - Galop</h1>
                <div className="cardsGalopeurs2013">
                    <div className="liens">

                    </div>
                </div>
            </div>
        )
    }
}

export default EcurieTopGalop