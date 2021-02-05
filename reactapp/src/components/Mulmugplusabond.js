import React from 'react'
import { Container, Row, Button, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, } from 'reactstrap';
import { Link } from 'react-router-dom';







function MulmugPlus() {




    return (

        <Container>
            <Row style={{ display: 'flex', flexDirection: 'row', background: "linear-gradient(#54C5B4, #1F8A9E)" }}>
                <Col xs={12} md={4} >
                    <Link to='/'><img width='80%' src="./logomulmugwhite.png" /></Link>
                </Col>
                <Col xs={12} md={8} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Link to="/Mulmugplusabond" style={{ textDecorationLine: 'none' }}><p style={{ backgroundColor: '#FFC700', color: '#FFFFFF', fontWeight: 'bold', paddingRight: 5, width: 250, borderRadius: 10, textAlign: 'center' }}>MULMUG PLUS</p></Link>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={{ color: '#FFFFFF', paddingLeft: 5 }}>Me connecter</p></Link>
                </Col>
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Prêt à encourager votre enfants à apprendre en faisant des exercices !</h4>
            </Row>
            <Row>
                <Col xs={4} style={{backgroundColor:'#1F8A9E', borderTopLeftRadius:10, borderTopRightRadius:10, display:'flex', flexDirection:'row', justifyContent:'center'}}>
                    <Link to="/Mulmugplusabond" style={{display:'flex', color:'#FFFFFF', textAlign:'center' }}>Abondement en Points</Link>
                </Col>
                <Col xs={4} style={{backgroundColor:'white', borderTopLeftRadius:10, borderTopRightRadius:10, display:'flex', flexDirection:'row', justifyContent:'center', border:'1px solid #1F8A9E'}}>
                    <Link to="/Mulmugplusabonn" style={{display:'flex', color:'#1F8A9E', textAlign:'center' }}>Abonnement</Link>
                </Col>
                <Col xs={4} style={{backgroundColor:'white', borderTopLeftRadius:10, borderTopRightRadius:10, display:'flex', flexDirection:'row', justifyContent:'center', border:'1px solid #1F8A9E'}}>
                    <Link to="/Mulmugpluscahiers" style={{display:'flex', color:'#1F8A9E', textAlign:'center' }}>Cahiers de vacances</Link>
                </Col>
            </Row>
            <Row>
                <p>EXPLICATIONS</p>
                <p>Sélectionnez l’abondement que vous souhaitez:</p>
            </Row>
            <Row style={{marginLeft:50, marginRight:50}}>
                <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ borderRadius: 20 }}>
                        <CardImg top src="./redstar.png" alt="Card image cap" style={{ width: '50%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}></CardTitle>
                            <CardSubtitle tag="h7" className="mb-2 text-muted">12.00€</CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}></CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ borderRadius: 20 }}>
                        <CardImg top src="./cahierNoel.png" alt="Card image cap" style={{ width: '30%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Cahier de Noël</CardTitle>
                            <CardSubtitle tag="h7" className="mb-2 text-muted"></CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>20% des exercices sur les chapitres étudiés jusqu'aux vacances de la Toussaint et 80% des exercices sur les chapitres étudiés depuis les vacances de la Toussaint jusqu'aux vacances de Noël.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ borderRadius: 20 }}>
                        <CardImg top src="./cahierHiver.png" alt="Card image cap" style={{ width: '30%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Cahier d'Hiver</CardTitle>
                            <CardSubtitle tag="h7" className="mb-2 text-muted"></CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>40% des exercices sur les chapitres étudiés jusqu'aux vacances de Noël et 60% des exercices sur les chapitres étudiés depuis les vacances de Noël jusqu'aux vacances d'hiver.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ borderRadius: 20 }}>
                        <CardImg top src="./cahierPrintemps.png" alt="Card image cap" style={{ width: '30%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Cahier de Printemps</CardTitle>
                            <CardSubtitle tag="h7" className="mb-2 text-muted"></CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>60% des exercices sur les chapitres étudiés jusqu'aux vacances de d'hiver et 40% des exercices sur les chapitres étudiés depuis les vacances d'hiver jusqu'aux vacances de Pâques.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ borderRadius: 20 }}>
                        <CardImg top src="./cahierEte.png" alt="Card image cap" style={{ width: '30%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Cahier d'Été</CardTitle>
                            <CardSubtitle tag="h7" className="mb-2 text-muted"></CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>Une révision complète sur tous les chapitres étudiés durant l'année scolaire.</CardText>
                            <Button style={{ display: 'flex', alignItems: 'flex-end' }}>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


        </Container>

    )
}


export default MulmugPlus;