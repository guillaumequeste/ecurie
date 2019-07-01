import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class EcurieXXLSauteurs extends Component {
  
    render () {
        return (
            <div>
                <h1>Ecurie XXL Sauteurs</h1>
                <Link to="/belle_promesse/">Belle Promesse</Link>
                <Link to="/borenis">Borenis</Link>
                <Link to="/eclair_etincelle">Eclair Etincelle</Link>
                <Link to="/elcondor_forlonge">Elcond'Or Forlonge</Link>
                <Link to="/escort_groove">Escort Groove</Link>
                <Link to="/everybodywantsme">Everybodywantsme</Link>
                <Link to="/gaby_oh_gaby">Gaby Oh Gaby</Link>
                <Link to="/galante_d_arthel">Galante d'Arthel</Link>
                <Link to="/gaspachos">Gaspacho's</Link>
                <Link to="/glasgow_allen">Glasgow Allen</Link>
                <Link to="/gueule_de_loup">Gueule de Loup</Link>
                <Link to="/joly_and_bach">Joly And Bach</Link>
                <Link to="/korum">korum</Link>
                <Link to="/master_gold">Master Gold</Link>
            </div>
        )
    }
}

export default EcurieXXLSauteurs