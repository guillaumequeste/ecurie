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
                    <a href="http://www.guillaumequeste.fr" target="_blank" rel="noopener noreferrer" className="lienPortfolio">http://www.guillaumequeste.fr</a>
                    <h6 className="maj">date de mise à jour : 10 juillet 2020</h6>
                </div>
            </div>
        )
    }
}

export default Contact