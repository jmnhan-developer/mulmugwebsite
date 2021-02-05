import React from 'react'
import { Container, Row, Button, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, } from 'reactstrap';
import { Link } from 'react-router-dom';


import Header from './header.js'
import Footer from './footer.js'



function MulmugPlusCahiers() {




    return (

        <Container>
            <Row>
                <Header />
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Prêt à encourager votre enfants à apprendre en faisant des exercices !</h4>
            </Row>
            <Row style={{ height:50}} >
                <Col xs={4} style={{ backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', border: '1px solid #1F8A9E' }}>
                    <Link to="/Mulmugplusabond" style={{ display: 'flex', color: '#1F8A9E', textAlign: 'center' }}>Abondement en Points</Link>
                </Col>
                <Col xs={4} style={{ backgroundColor: 'white', borderTopLeftRadius: 10, borderTopRightRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', border: '1px solid #1F8A9E'  }}>
                    <Link to="/Mulmugplusabonn" style={{ display: 'flex', color: '#1F8A9E', textAlign: 'center' }}>Abonnement</Link>
                </Col>
                <Col xs={4} style={{ backgroundColor: '#1F8A9E', borderTopLeftRadius: 10, borderTopRightRadius: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', border: '1px solid #1F8A9E' }}>
                    <Link to="/Mulmugpluscahiers" style={{ display: 'flex', color: '#FFFFFF', textAlign: 'center' }}>Cahiers de vacances</Link>
                </Col>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column' }}>
                <p>EXPLICATIONS</p>
                <p>Sélectionnez l’abondement que vous souhaitez:</p>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Col xs={10} md={3} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, border: '1px solid #D5DBDB', borderRadius: 20, alignItems: 'center', marginLeft: 5, marginRight: 5 }}>
                    <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 30, backgroundImage: 'url(./yellowstar1.png', width: 160, height: 160, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>10 000</p>
                        <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>POINTS</p>
                    </Row>
                    <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ fontSize: 20, color: '#1F8A9E' }}>12.00€</p>
                    </Row>
                </Col>
                <Col xs={10} md={3} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, border: '1px solid #D5DBDB', borderRadius: 20, alignItems: 'center', marginLeft: 5, marginRight: 5 }}>
                    <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 30, backgroundImage: 'url(./yellowstar1.png', width: 160, height: 160, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>20 000</p>
                        <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>POINTS</p>
                    </Row>
                    <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ fontSize: 20, color: '#1F8A9E' }}>23.50€</p>
                    </Row>
                </Col>
                <Col xs={10} md={3} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, border: '1px solid #D5DBDB', borderRadius: 20, alignItems: 'center', marginLeft: 5, marginRight: 5 }}>
                    <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 30, backgroundImage: 'url(./yellowstar1.png', width: 160, height: 160, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>30 000</p>
                        <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>POINTS</p>
                    </Row>
                    <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ fontSize: 20, color: '#1F8A9E' }}>34.50€</p>
                    </Row>
                </Col>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Col xs={10} md={3} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, border: '1px solid #D5DBDB', borderRadius: 20, alignItems: 'center', marginLeft: 5, marginRight: 5 }}>
                    <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 30, backgroundImage: 'url(./yellowstar1.png', width: 160, height: 160, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>40 000</p>
                        <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>POINTS</p>
                    </Row>
                    <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ fontSize: 20, color: '#1F8A9E' }}>45.00€</p>
                    </Row>
                </Col>
                <Col xs={10} md={3} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, border: '1px solid #D5DBDB', borderRadius: 20, alignItems: 'center', marginLeft: 5, marginRight: 5 }}>
                    <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 30, backgroundImage: 'url(./yellowstar1.png', width: 160, height: 160, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>50 000</p>
                        <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>POINTS</p>
                    </Row>
                    <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <p style={{ fontSize: 20, color: '#1F8A9E' }}>55.00€</p>
                    </Row>
                </Col>
            </Row>

            <Footer />

        </Container>

    )
}


export default MulmugPlusCahiers;