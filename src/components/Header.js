import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({ menu: !this.state.menu })
    }

    render () {

        const show = (this.state.menu) ? "show" : "" ;

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top backgroundNavbar">
                    <Link to="/" className="navbar-brand">Accueil</Link>
                    <button className="navbar-toggler" type="button" onClick={ this.toggleMenu } data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={"collapse navbar-collapse " + show} id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/ecurieRMC2013" className="nav-link">RMC 2013<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ecurieRMC2014" className="nav-link">RMC 2014</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ecurieRMC2015" className="nav-link">RMC 2015</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ecurieClubRMC" className="nav-link">Club RMC</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ecurieXXL" className="nav-link">XXL</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ecurieTop" className="nav-link">Top</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/liste" className="nav-link">Liste des chevaux</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/bilan" className="nav-link">Bilan</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header