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
                    <div className="divAccueil">
                        <Link to="/ecurieRMC2013" className="lienAccueil"><img src={require("./img/RMC2013/casaque2013.png")} alt="casaque2013"/><span className="accueil">RMC 2013</span></Link>
                    </div>
                    <div className="divAccueil">
                        <Link to="/ecurieRMC2014" className="lienAccueil"><img src={require("./img/RMC2014/casaque2014.png")} alt="casaque2014"/><span className="accueil">RMC 2014</span></Link>
                    </div>
                    <div className="divAccueil">
                        <Link to="/ecurieRMC2015" className="lienAccueil"><img src={require("./img/RMC2015/casaque2015.png")} alt="casaque2015"/><span className="accueil">RMC 2015</span></Link>
                    </div>
                    <div className="divAccueil">
                        <Link to="/ecurieClubRMC" className="lienAccueil"><img src={require("./img/ClubRMC/casaqueClub.png")} alt="casaqueClub"/><span className="accueil">Club RMC</span></Link>
                    </div>
                    <div className="divAccueil">
                        <Link to="/ecurieXXL" className="lienAccueil"><img src={require("./img/XXL/casaqueXXL.png")} alt="casaqueXXL"/><span className="accueil">XXL</span></Link>
                    </div>
                    <div className="divAccueil">
                        <Link to="/ecurieTop" className="lienAccueil"><img src={require("./img/Top/casaqueTop.jpg")} alt="casaqueTop" className="casaqueTop"/><span className="accueil">Ecurie Top</span></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default App