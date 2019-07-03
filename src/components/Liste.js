import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './Liste.css'

class Liste extends Component {

    render () {
        return (
            <div className="bodyListe">
                <Header />
                <h1 className="titreListe">Liste des chevaux</h1>
                <div className="row rowListe">
                    <div className="col-sm-3">
                        <p><Link to="/al_rassoul" className="lienCheval">Al Rassoul</Link></p>
                        <p><Link to="/arancio" className="lienCheval">Arancio</Link></p>
                        <p><Link to="/trotteurs/auteur" className="lienCheval">Auteur</Link></p>
                        <p><Link to="/baldi_star" className="lienCheval">Baldi Star</Link></p>
                        <p><Link to="/belle_promesse" className="lienCheval">Belle Promesse</Link></p>
                        <p><Link to="/benodet" className="lienCheval">Benodet</Link></p>
                        <p><Link to="/beynostorm" className="lienCheval">Beynostorm</Link></p>
                        <p><Link to="/borenis" className="lienCheval">Borenis</Link></p>
                        <p><Link to="/borsalino_du_jal" className="lienCheval">Borsalino du Jal</Link></p>
                        <p><Link to="/bowmore" className="lienCheval">Bowmore</Link></p>
                        <p><Link to="/cayo_coco" className="lienCheval">Cayo Coco</Link></p>
                        <p><Link to="/claudia_eria" className="lienCheval">Claudia Eria</Link></p>
                        <p><Link to="/countess_allegro" className="lienCheval">Countess Allegro</Link></p>
                        <p><Link to="/trotteurs/cristal_pierji" className="lienCheval">Cristal Pierji</Link></p>
                        <p><Link to="/dalkelef" className="lienCheval">Dalkelef</Link></p>
                    </div>
                    <div className="col-sm-3">
                        <p><Link to="/diva_du_dancing" className="lienCheval">Diva du Dancing</Link></p>
                        <p><Link to="/django_gibus" className="lienCheval">Django Gibus</Link></p>
                        <p><Link to="/domino_de_larre" className="lienCheval">Domino de Larré</Link></p>
                        <p><Link to="/trotteurs/drakkar_delo" className="lienCheval">Drakkar Delo</Link></p>
                        <p><Link to="/eclair_etincelle" className="lienCheval">Eclair Etincelle</Link></p>
                        <p><Link to="/eclipse_somolli" className="lienCheval">Eclipse Somolli</Link></p>
                        <p><Link to="/elcondor_forlonge" className="lienCheval">Elcond'Or Forlonge</Link></p>
                        <p><Link to="/envergure" className="lienCheval">Envergure</Link></p>
                        <p><Link to="/escort_groove" className="lienCheval">Escort Groove</Link></p>
                        <p><Link to="/everybodywantsme" className="lienCheval">Everybodywantsme</Link></p>
                        <p><Link to="/falcolina" className="lienCheval">Falcolina</Link></p>
                        <p><Link to="/gaby_oh_gaby" className="lienCheval">Gaby Oh Gaby</Link></p>
                        <p><Link to="/galante_d_arthel" className="lienCheval">Galante d'Arthel</Link></p>
                        <p><Link to="/gaspachos" className="lienCheval">Gaspacho's</Link></p>
                        <p><Link to="/glasgow_allen" className="lienCheval">Glasgow Allen</Link></p>
                    </div>
                    <div className="col-sm-3">
                        <p><Link to="/gueule_de_loup" className="lienCheval">Gueule de Loup</Link></p>
                        <p><Link to="/joly_and_bach" className="lienCheval">Joly and Bach</Link></p>
                        <p><Link to="/jurisprudance" className="lienCheval">Jurisprudance</Link></p>
                        <p><Link to="/kilava" className="lienCheval">Kilava</Link></p>
                        <p><Link to="/korum" className="lienCheval">Korum</Link></p>
                        <p><Link to="/loquen" className="lienCheval">Loquen</Link></p>
                        <p><Link to="/magic_miles" className="lienCheval">Magic Miles</Link></p>
                        <p><Link to="/master_gold" className="lienCheval">Master Gold</Link></p>
                        <p><Link to="/mysaan" className="lienCheval">Mysaan</Link></p>
                        <p><Link to="/my_soul" className="lienCheval">My Soul</Link></p>
                        <p><Link to="/pan_di_stelle" className="lienCheval">Pan di Stelle</Link></p>
                        <p><Link to="/park_square" className="lienCheval">Park Square</Link></p>
                        <p><Link to="/pedregalejo" className="lienCheval">Pedregalejo</Link></p>
                        <p><Link to="/place_des_ternes" className="lienCheval">Place des Ternes</Link></p>
                        <p><Link to="/pont_marie" className="lienCheval">Pont Marie</Link></p>
                    </div>
                    <div className="col-sm-3">
                        <p><Link to="/race_for_fame" className="lienCheval">Race For Fame</Link></p>
                        <p><Link to="/saam" className="lienCheval">Saam</Link></p>
                        <p><Link to="/shingueti" className="lienCheval">Shingueti</Link></p>
                        <p><Link to="/sole_reign" className="lienCheval">Sole Reign</Link></p>
                        <p><Link to="/solside" className="lienCheval">Solside</Link></p>
                        <p><Link to="/sweet_smoke" className="lienCheval">Sweet Smoke</Link></p>
                        <p><Link to="/tchoupi_chop" className="lienCheval">T'Choupi Chop</Link></p>
                        <p><Link to="/trotteurs/unrefundable" className="lienCheval">Unrefundable</Link></p>
                        <p><Link to="/valley_kid" className="lienCheval">Valley Kid</Link></p>
                        <p><Link to="/wabba" className="lienCheval">Wabba</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Liste