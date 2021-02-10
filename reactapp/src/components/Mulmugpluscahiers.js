import React from 'react'
import { Container, Row, Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


import Header from './header.js'
import Footer from './footer.js'



function MulmugPlusCahiers() {


    {/* TABLEAU D'OBJETS POUR LA MAP */ }

    var cahierVacData = [
        { name: "cahier automne", url: "./cahierAutomne.png", holiday: "TOUSSAINTS", matiere: "Mathématiques", price: "4.99€" },
        { name: "cahier automne", url: "./cahierNoel.png", holiday: "NOËL", matiere: "Mathématiques", price: "5.99€" },
        { name: "cahier automne", url: "./cahierHiver.png", holiday: "HIVER", matiere: "Mathématiques", price: "6.99€" },
        { name: "cahier automne", url: "./cahierPrintemps.png", holiday: "PÂQUES", matiere: "Mathématiques", price: "7.99€" },
        { name: "cahier automne", url: "./cahierEte.png", holiday: "ÉTÉ", matiere: "Mathématiques", price: "8.99€" },
    ];

    {/* LA MAP */ }

    var cahierVacCard = cahierVacData.map(function (cahier, i ) {
        return <Col xs={10} md={3} style={styleCahier}>
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', borderTopLeftRadius: 19, borderTopRightRadius: 19, background: "linear-gradient( #8DAADC, #665EFF)", marginBottom:20 }}>
                <Col xs={4} style={{display:'flex'}}>
                    <img width='100%' src={cahier.url} />
                </Col>
                <Col xs={8}>
                    <p style={{display:'flex', textAlign:'center', color:'#FFFFFF', marginBottom:0}}>CAHIER DE VACANCES</p>
                </Col>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                <Col xs={12}>
                    <h6 style={{textAlign:'center', color: '#1F8A9E',}}>{cahier.holiday}</h6>
                </Col>
                <Col xs={12}>
                <p style={{textAlign:'center', color: '#1F8A9E',}}>{cahier.matiere}</p>
                </Col>
                <Col xs={12}>
                <p style={{textAlign:'center', color: '#FDC41F',}}>{cahier.price}</p>
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
                <Col xs={4} style={styleOnglet}>
                    <Link to="/Mulmugplusabonn" style={styleTextOnglet}>Abonnement</Link>
                </Col>
                <Col xs={4} style={styleOngletSelected}>
                    <Link to="/Mulmugpluscahiers" style={styleTextOngletSelected}>Cahiers de vacances</Link>
                </Col>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', paddingLeft:15, paddingRight:15 }}>
                <p>EXPLICATIONS</p>
                <p>Sélectionnez l’abondement que vous souhaitez:</p>
            </Row>

            


            {/* RESULTAT DE LA MAP */}
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom:50, paddingLeft:15, paddingRight:15 }}>
                {cahierVacCard}
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }}>VALIDER MA SÉLECTION</Button>
            </Row>

            <Footer />

        </Container>

    )
}

var styleCahier = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    border: '1px solid #D5DBDB',
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    boxShadow: '3px 3px 3px #D5DBDB'
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

export default MulmugPlusCahiers;