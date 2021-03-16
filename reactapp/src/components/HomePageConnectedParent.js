import React from 'react'
import { Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './header.js'
import Footer from './footer.js'
import PlusBonsdAchatAutorises from './PlusBonsdAchatAutorises.js'
import PlusAbondement from './PlusAbondement.js'
import PlusPlusForfaitSansPub from './PlusForfaitSansPub.js'
import PlusCahiersVacances from './PlusCahiersVacances.js'




function HomePageConnectedParent() {



    return (
        <div>

            <Header />

            <div style={{ marginLeft: 5, marginRight: 5 }}>

                <Row style={{ display: 'flex', justifyContent: 'center', marginTop: 50, marginBottom: 30, paddingLeft: 15, paddingRight: 15 }}>
                    <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Bonjour XXXXX ! Bienvenue sur votre espace personnel !</h4>
                    
                </Row>
                <Row style={{display:'flex', justifyContent:'center'}}>
                <h6 style={{ color: '#1F8A9E', fontWeight:'bold',textAlign: 'center' }}>PILOTAGE</h6>
                </Row>

                {/* LES ONGLETS */}
                <Row style={{ height: 50, paddingLeft: 15, paddingRight: 15, marginBottom:20 }} >
                    <Col xs={3} style={styleOngletSelected}>
                        <Link to="/Mulmugplusabond" style={styleTextOngletSelected}>Bons d'achat autorisés</Link>
                    </Col>
                    <Col xs={3} style={styleOnglet}>
                        <Link to="/Mulmugplusabonn" style={styleTextOnglet}>Abondement</Link>
                    </Col>
                    <Col xs={3} style={styleOnglet}>
                        <Link to="/Mulmugpluscahiers" style={styleTextOnglet}>Forfaits sans pub</Link>
                    </Col>
                    <Col xs={3} style={styleOnglet}>
                        <Link to="/Mulmugpluscahiers" style={styleTextOnglet}>Cahiers de vacances</Link>
                    </Col>
                </Row>
                <PlusBonsdAchatAutorises/>
                <PlusAbondement/>
                <PlusPlusForfaitSansPub/>
                <PlusCahiersVacances/>

            </div>

            <Footer />

        </div>

    )
};
var styleAbond = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    border: '1px solid #D5DBDB',
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    boxShadow: '3px 3px 3px #D5DBDB',
};
var styleOnglet = {
    backgroundColor: '#F2F3F4',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #FFFFFF'
};

var styleOngletSelected = {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
};

var styleTextOngletSelected = {
    display: 'flex',
    color: '#1F8A9E',
    textAlign: 'center',
    fontSize:14
    
};

var styleTextOnglet = {
    display: 'flex',
    color: '#1F8A9E',
    textAlign: 'center',
    fontSize:14
};
export default HomePageConnectedParent