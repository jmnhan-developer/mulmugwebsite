import React from 'react'
import { Container, Row, Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


import Header from './header.js'
import Footer from './footer.js'



function MulmugPlusAbonn() {


    {/* TABLEAU D'OBJETS POUR LA MAP */ }

    var abonnementData = [
        { name: "abonnement mensuel", formule: "FORFAIT", pub: "SANS PUB", enga: "sans engagement", price: "9,99€ / mois sans engagement" },
        { name: "abonnement annuel", formule: "FORFAIT", pub: "SANS PUB", enga: "avec engagement", price: "7,99€ / mois avec un engagement sur 12 mois" },
    ];

    {/* LA MAP */ }

    var abonnementCard = abonnementData.map(function (abonn, i) {
        return <Col xs={12} md={3} style={styleAbonn}>
            <Row style={styleAbonnFirstRow}>
                <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                    <h5 style={{ display: 'flex', textAlign: 'center', color: '#FFFFFF', marginBottom: 0, }}>{abonn.formule}</h5>
                    <h3 style={{ display: 'flex', textAlign: 'center', color: '#FFFFFF', marginBottom: 0 }}>{abonn.pub}</h3>
                    <p style={{ display: 'flex', textAlign: 'center', color: '#343a40', marginBottom: 0 }}>{abonn.enga}</p>
                </Col>
            </Row>
            <Row style={styleAbonnSecondRow}>
                <Col xs={12}>
                    <p style={{ textAlign: 'center', color: '#1F8A9E', marginBottom:0 }}>{abonn.price}</p>
                </Col>
            </Row>
        </Col>
    });


    return (

        <Container>
            <Row>
                <Header />
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30, paddingLeft:15, paddingRight:15 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Prêt à encourager votre enfant à apprendre en faisant des exercices !</h4>
            </Row>

            {/* LES ONGLETS */}
            <Row style={{ height: 50, paddingLeft:15, paddingRight:15 }} >
                <Col xs={4} style={styleOnglet}>
                    <Link to="/Mulmugplusabond" style={styleTextOnglet}>Abondement en Points</Link>
                </Col>
                <Col xs={4} style={styleOngletSelected}>
                    <Link to="/Mulmugplusabonn" style={styleTextOngletSelected}>Abonnement</Link>
                </Col>
                <Col xs={4} style={styleOnglet}>
                    <Link to="/Mulmugpluscahiers" style={styleTextOnglet}>Cahiers de vacances</Link>
                </Col>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', paddingLeft:15, paddingRight:15 }}>
                <p>EXPLICATIONS</p>
                <p>Sélectionnez l’abondement que vous souhaitez:</p>
            </Row>




            {/* RESULTAT DE LA MAP */}
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom:50,paddingLeft:15, paddingRight:15 }}>
                {abonnementCard}
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }}>VALIDER MA SÉLECTION</Button>
            </Row>

            <Footer />

        </Container>

    )
}

var styleAbonn = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    border: '1px solid #D5DBDB',
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    boxShadow: '3px 3px 3px #D5DBDB',
    paddingLeft:0,
    paddingRight:0
};

var styleAbonnFirstRow = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    background: "#FDC41F",
    marginBottom: 0,
    width: '100%',
    height: 100,
    paddingRight: 0,
    paddingLeft: 0
};

var styleAbonnSecondRow = {
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    marginBottom: 0,
    width: '100%',
    height: 100,
}

var styleOnglet = {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #1F8A9E'
}

var styleOngletSelected = {
    backgroundColor: '#1F8A9E',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
}

var styleTextOngletSelected = {
    display: 'flex',
    color: '#FFFFFF',
    textAlign: 'center'
}

var styleTextOnglet = {
    display: 'flex',
    color: '#1F8A9E',
    textAlign: 'center'
}

export default MulmugPlusAbonn;