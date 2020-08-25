import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import EcurieRMC2013 from './components/ecurieRMC2013/EcurieRMC2013'
import EcurieRMC2014 from './components/ecurieRMC2014/EcurieRMC2014'
import EcurieRMC2015 from './components/ecurieRMC2015/EcurieRMC2015'
import EcurieClubRMC from './components/ecurieClubRMC/EcurieClubRMC'
import EcurieXXL from './components/ecurieXXL/EcurieXXL'
import EcurieXXLSauteurs from './components/ecurieXXL/sauteursXXL/EcurieXXLSauteurs'
import EcurieTop from './components/ecurieTop/EcurieTop'
import EcurieTopGalop from './components/ecurieTop/galopTop/EcurieTopGalop'
import EcurieTopTrot from './components/ecurieTop/trotTop/EcurieTopTrot'
import EcurieTopObstacle from './components/ecurieTop/obstacleTop/EcurieTopObstacle'
import EcurieRMC2013Galopeurs from './components/ecurieRMC2013/galopeurs2013/EcurieRMC2013Galopeurs'
import EcurieRMC2014Galopeurs from './components/ecurieRMC2014/galopeurs2014/EcurieRMC2014Galopeurs'
import EcurieRMC2014Trotteurs from './components/ecurieRMC2014/trotteurs2014/EcurieRMC2014Trotteurs'
import EcurieRMC2015Galopeurs from './components/ecurieRMC2015/galopeurs2015/EcurieRMC2015Galopeurs'
import EcurieRMC2015Trotteurs from './components/ecurieRMC2015/trotteurs2015/EcurieRMC2015Trotteurs'
import EcurieClubRMCGalopeurs from './components/ecurieClubRMC/galopeursClub/EcurieClubRMCGalopeurs'
import EcurieClubRMCTrotteurs from './components/ecurieClubRMC/trotteursClub/EcurieClubRMCTrotteurs'
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
import AlRassoul from './components/ecurieClubRMC/galopeursClub/AlRassoul'
import CayoCoco from './components/ecurieClubRMC/galopeursClub/CayoCoco'
import Dalkelef from './components/ecurieClubRMC/galopeursClub/Dalkelef'
import DivaDuDancing from './components/ecurieClubRMC/galopeursClub/DivaDuDancing'
import Envergure from './components/ecurieClubRMC/galopeursClub/Envergure'
import Jurisprudance from './components/ecurieClubRMC/galopeursClub/Jurisprudance'
import Loquen from './components/ecurieClubRMC/galopeursClub/Loquen'
import MySoul from './components/ecurieClubRMC/galopeursClub/MySoul'
import Mysaan from './components/ecurieClubRMC/galopeursClub/Mysaan'
import Saam from './components/ecurieClubRMC/galopeursClub/Saam'
import StormKaty from './components/ecurieClubRMC/galopeursClub/StormKaty'
import Wabba from './components/ecurieClubRMC/galopeursClub/Wabba'
import CristalPierjiClub from './components/ecurieClubRMC/trotteursClub/CristalPierjiClub'
import DjangoGibus from './components/ecurieClubRMC/trotteursClub/DjangoGibus'
import DominoDeLarre from './components/ecurieClubRMC/trotteursClub/DominoDeLarre'
import DrakkarDeloClub from './components/ecurieClubRMC/trotteursClub/DrakkarDeloClub'
import EclipseSomolli from './components/ecurieClubRMC/trotteursClub/EclipseSomolli'
import BellePromesse from './components/ecurieXXL/sauteursXXL/BellePromesse'
import Borenis from './components/ecurieXXL/sauteursXXL/Borenis'
import EclairEtincelle from './components/ecurieXXL/sauteursXXL/EclairEtincelle'
import ElcondorForlonge from './components/ecurieXXL/sauteursXXL/ElcondorForlonge'
import EscortGroove from './components/ecurieXXL/sauteursXXL/EscortGroove'
import Everybodywantsme from './components/ecurieXXL/sauteursXXL/Everybodywantsme'
import GabyOhGaby from './components/ecurieXXL/sauteursXXL/GabyOhGaby'
import GalanteDArthel from './components/ecurieXXL/sauteursXXL/GalanteDArthel'
import Gaspachos from './components/ecurieXXL/sauteursXXL/Gaspachos'
import GlasgowAllen from './components/ecurieXXL/sauteursXXL/GlasgowAllen'
import GueuleDeLoup from './components/ecurieXXL/sauteursXXL/GueuleDeLoup'
import JolyAndBach from './components/ecurieXXL/sauteursXXL/JolyAndBach'
import Korum from './components/ecurieXXL/sauteursXXL/Korum'
import MasterGold from './components/ecurieXXL/sauteursXXL/MasterGold'
import Highlands from './components/ecurieTop/obstacleTop/Highlands'
import Contact from './components/Contact'
import Bilan from './components/Bilan'
import Liste from './components/Liste'
import Auteur from './components/Auteur'
import CristalPierji from './components/CristalPierji'
import DrakkarDelo from './components/DrakkarDelo'
import Unrefundable from './components/Unrefundable'

import ErrorNotFound from './components/ErrorNotFound'

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>

            <Route path='/ecurieRMC2013' component={EcurieRMC2013}/>
            <Route path='/ecurieRMC2014' component={EcurieRMC2014}/>
            <Route path='/ecurieRMC2015' component={EcurieRMC2015}/>
            <Route path='/ecurieClubRMC' component={EcurieClubRMC}/>
            <Route path='/ecurieXXL' component={EcurieXXL}/>
            <Route path='/ecurieTop' component={EcurieTop}/>
            <Route path='/liste' component={Liste}/>
            <Route path='/bilan' component={Bilan}/>
            <Route path='/contact' component={Contact}/>

            <Route path='/galopeurs2013' component={EcurieRMC2013Galopeurs}/>
            <Route path='/galopeurs2014' component={EcurieRMC2014Galopeurs}/>
            <Route path='/trotteurs2014' component={EcurieRMC2014Trotteurs}/>
            <Route path='/galopeurs2015' component={EcurieRMC2015Galopeurs}/>
            <Route path='/trotteurs2015' component={EcurieRMC2015Trotteurs}/>
            <Route path='/galopeursClub' component={EcurieClubRMCGalopeurs}/>
            <Route path='/trotteursClub' component={EcurieClubRMCTrotteurs}/>
            <Route path='/sauteursXXL' component={EcurieXXLSauteurs}/>
            <Route path='/galopTop' component={EcurieTopGalop}/>
            <Route path='/trotTop' component={EcurieTopTrot}/>
            <Route path='/obstacleTop' component={EcurieTopObstacle}/>

            <Route path='/benodet' component={Benodet}/>
            <Route path='/falcolina' component={Falcolina}/>
            <Route path='/pan_di_stelle' component={PanDiStelle}/>
            <Route path='/pedregalejo' component={Pedregalejo}/>
            <Route path='/shingueti' component={Shingueti}/>
            <Route path='/sole_reign' component={SoleReign}/>
            <Route path='/solside' component={Solside}/>
            <Route path='/sweet_smoke' component={SweetSmoke}/>
            <Route path='/tchoupi_chop' component={TChoupiChop}/>

            <Route path='/bowmore' component={Bowmore}/>
            <Route path='/claudia_eria' component={ClaudiaEria}/>
            <Route path='/kilava' component={Kilava}/>
            <Route path='/magic_miles' component={MagicMiles}/>
            <Route path='/place_des_ternes' component={PlaceDesTernes}/>
            <Route path='/pont_marie' component={PontMarie}/>
            <Route path='/race_for_fame' component={RaceForFame}/>

            <Route path='/arancio' component={Arancio}/>
            <Route path='/auteur2014' component={Auteur2014}/>
            <Route path='/baldi_star' component={BaldiStar}/>
            <Route path='/borsalino_du_jal' component={BorsalinoDuJal}/>
            <Route path='/unrefundable2014' component={Unrefundable2014}/>

            <Route path='/beynostorm' component={Beynostorm}/>
            <Route path='/countess_allegro' component={CountessAllegro}/>
            <Route path='/park_square' component={ParkSquare}/>
            <Route path='/valley_kid' component={ValleyKid}/>

            <Route path='/auteur2015' component={Auteur2015}/>
            <Route path='/cristal_pierji2015' component={CristalPierji2015}/>
            <Route path='/drakkar_delo2015' component={DrakkarDelo2015}/>
            <Route path='/unrefundable2015' component={Unrefundable2015}/>

            <Route path='/al_rassoul' component={AlRassoul}/>
            <Route path='/cayo_coco' component={CayoCoco}/>
            <Route path='/dalkelef' component={Dalkelef}/>
            <Route path='/diva_du_dancing' component={DivaDuDancing}/>
            <Route path='/envergure' component={Envergure}/>
            <Route path='/jurisprudance' component={Jurisprudance}/>
            <Route path='/loquen' component={Loquen}/>
            <Route path='/my_soul' component={MySoul}/>
            <Route path='/mysaan' component={Mysaan}/>
            <Route path='/saam' component={Saam}/>
            <Route path='/storm_katy' component={StormKaty}/>
            <Route path='/wabba' component={Wabba}/>

            <Route path='/cristal_pierjiClub' component={CristalPierjiClub}/>
            <Route path='/django_gibus' component={DjangoGibus}/>
            <Route path='/domino_de_larre' component={DominoDeLarre}/>
            <Route path='/drakkar_deloClub' component={DrakkarDeloClub}/>
            <Route path='/eclipse_somolli' component={EclipseSomolli}/>

            <Route path='/belle_promesse/' component={BellePromesse}/>
            <Route path='/borenis' component={Borenis}/>
            <Route path='/eclair_etincelle' component={EclairEtincelle}/>
            <Route path='/elcondor_forlonge' component={ElcondorForlonge}/>
            <Route path='/escort_groove' component={EscortGroove}/>
            <Route path='/everybodywantsme' component={Everybodywantsme}/>
            <Route path='/gaby_oh_gaby' component={GabyOhGaby}/>
            <Route path='/galante_d_arthel' component={GalanteDArthel}/>
            <Route path='/gaspachos' component={Gaspachos}/>
            <Route path='/glasgow_allen' component={GlasgowAllen}/>
            <Route path='/gueule_de_loup' component={GueuleDeLoup}/>
            <Route path='/joly_and_bach' component={JolyAndBach}/>
            <Route path='/korum' component={Korum}/>
            <Route path='/master_gold' component={MasterGold}/>

            <Route path='/highlands' component={Highlands}/>
            
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
