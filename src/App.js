import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import './App.css'

class App extends Component {
  
    render () {
        return (
            <div className="bodyApp">
                <Header />
                <div className="divApp">
                  <h1 className="titreApp">Home</h1>
                </div>
            </div>
        )
    }
}

export default App