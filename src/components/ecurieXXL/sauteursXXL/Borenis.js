import React, { Component } from 'react'
import Header from '../../Header'
import './Borenis.css'

class Borenis extends Component {
  
    render () {
        return (
            <div className="bodyChevalBorenis">
                <Header />
                <h1 className="nomCheval">Borenis</h1>
                <img className="imgDetail" src={require("../../../img/XXL/sauteursXXL/borenis/borenis1.jpg")} alt="borenis"/>
                <p>4 courses</p>
                <p>3 places</p>
            </div>
        )
    }
}

export default Borenis