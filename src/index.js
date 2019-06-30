import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import EcurieRMC2013 from './components/ecurieRMC2013/EcurieRMC2013'
import EcurieRMC2014 from './components/ecurieRMC2014/EcurieRMC2014'
import EcurieRMC2015 from './components/ecurieRMC2015/EcurieRMC2015'
import EcurieClubRMC from './components/ecurieClubRMC/EcurieClubRMC'
import EcurieXXL from './components/ecurieXXL/EcurieXXL'
import EcurieRMC2013Galopeurs from './components/ecurieRMC2013/galopeurs/EcurieRMC2013Galopeurs'
import EcurieRMC2014Galopeurs from './components/ecurieRMC2014/galopeurs/EcurieRMC2014Galopeurs'
import EcurieRMC2014Trotteurs from './components/ecurieRMC2014/trotteurs/EcurieRMC2014Trotteurs'
import EcurieRMC2015Galopeurs from './components/ecurieRMC2015/galopeurs/EcurieRMC2015Galopeurs'
import EcurieRMC2015Trotteurs from './components/ecurieRMC2015/trotteurs/EcurieRMC2015Trotteurs'
import EcurieClubRMCGalopeurs from './components/ecurieClubRMC/galopeurs/EcurieClubRMCGalopeurs'
import EcurieClubRMCTrotteurs from './components/ecurieClubRMC/trotteurs/EcurieClubRMCTrotteurs'
import EcurieXXLSauteurs from './components/ecurieXXL/sauteurs/EcurieXXLSauteurs'
import Benodet from './components/ecurieRMC2013/galopeurs2013/Benodet'
import Falcolina from './components/ecurieRMC2013/galopeurs2013/Falcolina'
import PanDiStelle from './components/ecurieRMC2013/galopeurs2013/PanDiStelle'
import Pedregalejo from './components/ecurieRMC2013/galopeurs2013/Pedregalejo'
import Shingueti from './components/ecurieRMC2013/galopeurs2013/Shingueti'
import SoleReign from './components/ecurieRMC2013/galopeurs2013/SoleReign'
import Solside from './components/ecurieRMC2013/galopeurs2013/Solside'
import SweetSmoke from './components/ecurieRMC2013/galopeurs2013/SweetSmoke'
import TChoupiChop from './components/ecurieRMC2013/galopeurs2013/TChoupiChop'
import Bowmore from './components/ecurieRMC2014/galopeurs2014/Bowmore'
import ClaudiaEria from './components/ecurieRMC2014/galopeurs2014/ClaudiaEria'
import Kilava from './components/ecurieRMC2014/galopeurs2014/Kilava'
import MagicMiles from './components/ecurieRMC2014/galopeurs2014/MagicMiles'
import PlaceDesTernes from './components/ecurieRMC2014/galopeurs2014/PlaceDesTernes'
import PontMarie from './components/ecurieRMC2014/galopeurs2014/PontMarie'
import RaceForFame from './components/ecurieRMC2014/galopeurs2014/RaceForFame'
import Arancio from './components/ecurieRMC2014/trotteurs2014/Arancio'
import Auteur2014 from './components/ecurieRMC2014/trotteurs2014/Auteur2014'
import BaldiStar from './components/ecurieRMC2014/trotteurs2014/BaldiStar'
import BorsalinoDuJal from './components/ecurieRMC2014/trotteurs2014/BorsalinoDuJal'
import Unrefundable2014 from './components/ecurieRMC2014/trotteurs2014/Unrefundable2014'
import Beynostorm from './components/ecurieRMC2015/galopeurs2015/Beynostorm'
import CountessAllegro from './components/ecurieRMC2015/galopeurs2015/CountessAllegro'
import ParkSquare from './components/ecurieRMC2015/galopeurs2015/ParkSquare'
import ValleyKid from './components/ecurieRMC2015/galopeurs2015/ValleyKid'
import Auteur2015 from './components/ecurieRMC2015/trotteurs2015/Auteur2015'
import CristalPierji2015 from './components/ecurieRMC2015/trotteurs2015/CristalPierji2015'
import DrakkarDelo2015 from './components/ecurieRMC2015/trotteurs2015/DrakkarDelo2015'
import Unrefundable2015 from './components/ecurieRMC2015/trotteurs2015/Unrefundable2015'


import Liste from './components/Liste'
import Auteur from './components/Auteur'
import CristalPierji from './components/CristalPierji'
import DrakkarDelo from './components/DrakkarDelo'
import Unrefundable from './components/Unrefundable'

import ErrorNotFound from './components/ErrorNotFound'

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/ecurieRMC2013' component={EcurieRMC2013}/>
            <Route path='/ecurieRMC2014' component={EcurieRMC2014}/>
            <Route path='/ecurieRMC2015' component={EcurieRMC2015}/>
            <Route path='/ecurieClubRMC' component={EcurieClubRMC}/>
            <Route path='/ecurieXXL' component={EcurieXXL}/>
            <Route path='/ecurieRMC2013/galopeurs' component={EcurieRMC2013Galopeurs}/>
            <Route path='/ecurieRMC2014/galopeurs' component={EcurieRMC2014Galopeurs}/>
            <Route path='/ecurieRMC2014/trotteurs' component={EcurieRMC2014Trotteurs}/>
            <Route path='/ecurieRMC2015/galopeurs' component={EcurieRMC2015Galopeurs}/>
            <Route path='/ecurieRMC2015/trotteurs' component={EcurieRMC2015Trotteurs}/>
            <Route path='/ecurieClubRMC/galopeurs' component={EcurieClubRMCGalopeurs}/>
            <Route path='/ecurieClubRMC/trotteurs' component={EcurieClubRMCTrotteurs}/>
            <Route path='/ecurieXXL/sauteurs' component={EcurieXXLSauteurs}/>
            <Route path='/ecurieRMC2013/galopeurs2013/benodet' component={Benodet}/>
            <Route path='/ecurieRMC2013/galopeurs2013/falcolina' component={Falcolina}/>
            <Route path='/ecurieRMC2013/galopeurs2013/pan_di_stelle' component={PanDiStelle}/>
            <Route path='/ecurieRMC2013/galopeurs2013/pedregalejo' component={Pedregalejo}/>
            <Route path='/ecurieRMC2013/galopeurs2013/shingueti' component={Shingueti}/>
            <Route path='/ecurieRMC2013/galopeurs2013/sole_reign' component={SoleReign}/>
            <Route path='/ecurieRMC2013/galopeurs2013/solside' component={Solside}/>
            <Route path='/ecurieRMC2013/galopeurs2013/sweet_smoke' component={SweetSmoke}/>
            <Route path='/ecurieRMC2013/galopeurs2013/tchoupi_chop' component={TChoupiChop}/>
            <Route path='/ecurieRMC2014/galopeurs2014/bowmore' component={Bowmore}/>
            <Route path='/ecurieRMC2014/galopeurs2014/claudia_eria' component={ClaudiaEria}/>
            <Route path='/ecurieRMC2014/galopeurs2014/kilava' component={Kilava}/>
            <Route path='/ecurieRMC2014/galopeurs2014/magic_miles' component={MagicMiles}/>
            <Route path='/ecurieRMC2014/galopeurs2014/place_des_ternes' component={PlaceDesTernes}/>
            <Route path='/ecurieRMC2014/galopeurs2014/pont_marie' component={PontMarie}/>
            <Route path='/ecurieRMC2014/galopeurs2014/race_for_fame' component={RaceForFame}/>
            <Route path='/ecurieRMC2014/trotteurs2014/arancio' component={Arancio}/>
            <Route path='/ecurieRMC2014/trotteurs2014/auteur2014' component={Auteur2014}/>
            <Route path='/ecurieRMC2014/trotteurs2014/baldi_star' component={BaldiStar}/>
            <Route path='/ecurieRMC2014/trotteurs2014/borsalino_du_jal' component={BorsalinoDuJal}/>
            <Route path='/ecurieRMC2014/trotteurs2014/unrefundable2014' component={Unrefundable2014}/>
            <Route path='/ecurieRMC2015/galopeurs2015/beynostorm' component={Beynostorm}/>
            <Route path='/ecurieRMC2015/galopeurs2015/countess_allegro' component={CountessAllegro}/>
            <Route path='/ecurieRMC2015/galopeurs2015/park_square' component={ParkSquare}/>
            <Route path='/ecurieRMC2015/galopeurs2015/valley_kid' component={ValleyKid}/>
            <Route path='/ecurieRMC2015/trotteurs2015/auteur2015' component={Auteur2015}/>
            <Route path='/ecurieRMC2015/trotteurs2015/cristal_pierji2015' component={CristalPierji2015}/>
            <Route path='/ecurieRMC2015/trotteurs2015/drakkar_delo2015' component={DrakkarDelo2015}/>
            <Route path='/ecurieRMC2015/trotteurs2015/unrefundable2015' component={Unrefundable2015}/>
            
            <Route path='/liste' component={Liste}/>
            <Route path='/trotteurs/auteur' component={Auteur}/>
            <Route path='/trotteurs/cristal_pierji' component={CristalPierji}/>
            <Route path='/trotteurs/drakkar_delo' component={DrakkarDelo}/>
            <Route path='/trotteurs/unrefundable' component={Unrefundable}/>


            <Route path="*" component={ErrorNotFound}/>
        </Switch>
    </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
