import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


import Header from './header.js'
import Footer from './footer.js'



function MulmugPlusAbond() {


    {/* TABLEAU D'OBJETS POUR LA MAP */ }

    var abondementData = [
        { nbpoints: "10 000", point: "POINTS", price: "12.00€" },
        { nbpoints: "20 000", point: "POINTS", price: "23.50€" },
        { nbpoints: "30 000", point: "POINTS", price: "34.50€" },
        { nbpoints: "40 000", point: "POINTS", price: "45.00€" },
        { nbpoints: "50 000", point: "POINTS", price: "55.00€" },
    ];

    {/* LA MAP */ }

    var abondementCard = abondementData.map(function (abond, i) {
        return <Col xs={10} md={3} style={styleAbond}>
            <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 30, backgroundImage: 'url(./yellowstar1.png', width: 160, height: 160, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>{abond.nbpoints}</p>
                <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>{abond.point}</p>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#1F8A9E' }}>{abond.price}</p>
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
                <Col xs={4} style={styleOngletSelected}>
                    <Link to="/Mulmugplusabond" style={styleTextOngletSelected}>Abondement en Points</Link>
                </Col>
                <Col xs={4} style={styleOnglet}>
                    <Link to="/Mulmugplusabonn" style={styleTextOnglet}>Abonnement</Link>
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
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom:50, paddingLeft:15, paddingRight:15 }}>
                {abondementCard}
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }}>VALIDER MA SÉLECTION</Button>
            </Row>

            <Footer />

        </Container>

    )
}

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
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #1F8A9E'
};

var styleOngletSelected = {
    backgroundColor: '#1F8A9E',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
};

var styleTextOngletSelected = {
    display: 'flex',
    color: '#FFFFFF',
    textAlign: 'center'
};

var styleTextOnglet = {
    display: 'flex',
    color: '#1F8A9E',
    textAlign: 'center'
};

export default MulmugPlusAbond;