import React, { Component } from 'react'
import Header from './Header'
import './Contact.css'

class Contact extends Component {
  
    render () {
        return (
            <div className="bodyContact">
                <Header />
                <div className="divContact">
                    <h3 className="mail">guillaume.queste@laposte.net</h3>
                    <a href="www.guillaumequeste.fr" className="lienPortfolio">www.guillaumequeste.fr</a>
                    <h6 className="maj">date de mise à jour : 7 juillet 2019</h6>
                </div>
            </div>
        )
    }
}

export default Contact