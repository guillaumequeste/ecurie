import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import './Benodet.css'

class Benodet extends Component {
  
    render () {
        return (
            <div className="body2013">
                <Header />
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src="..." alt="Card image cap" />
                    <div className="card-body">
                        <p className="card-text">Bénodet</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Benodet