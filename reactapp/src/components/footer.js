import React from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';






function Footer() {



    return (
        <Container>
            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '80%', marginTop: 50, marginBottom: 10 }} />
            </Row>

            {/* LE FOOTER */}

            <Row style={{ display: 'flex', flexDirection: 'row', background: "linear-gradient(#54C5B4, #1F8A9E)", color: 'white' }}>
                <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
                    <h7 style={{ marginBottom: 10 }}>A PROPOS DE MULMUG</h7>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={{ marginBottom: 1, fontSize: 13, color: 'white' }}>Qui sommes nous?</p></Link>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={{ marginBottom: 1, fontSize: 13, color: 'white' }}>Matières</p></Link>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={{ marginBottom: 1, fontSize: 13, color: 'white' }}>Points Mulmug</p></Link>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={{ marginBottom: 1, fontSize: 13, color: 'white' }}>Abondement en points</p></Link>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={{ marginBottom: 1, fontSize: 13, color: 'white' }}>Abonnement premium</p></Link>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={{ marginBottom: 1, fontSize: 13, color: 'white' }}>Cahiers de vacances</p></Link>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={{ marginBottom: 1, fontSize: 13, color: 'white' }}>Nos partenaires</p></Link>
                </Col>
                <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
                    <h7 style={{ marginBottom: 10 }}>CONDITIONS</h7>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={{ marginBottom: 1, fontSize: 13, color: 'white' }}>Mentions légales</p></Link>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={{ marginBottom: 1, fontSize: 13, color: 'white' }}>Règle de confidentialité</p></Link>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={{ marginBottom: 1, fontSize: 13, color: 'white' }}>Sécurité</p></Link>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={{ marginBottom: 1, fontSize: 13, color: 'white' }}>CGU</p></Link>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={{ marginBottom: 1, fontSize: 13, color: 'white' }}>Plan du site</p></Link>
                </Col>
                <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
                    <h7 style={{ marginBottom: 10 }}>RESTONS EN CONTACT</h7>
                    <p style={{ marginBottom: 1, fontSize: 13 }}>Newsletter</p>
                    <Col style={{ diplay: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 'none', paddingRight: 0, paddingLeft: 0 }}>
                        <input style={{ marginBottom: 1, fontSize: 13, border: 'none', borderRadius: 5, backgroundColor: '#f8f9fa', height: 30, paddingLeft: 'none', paddingRight: 'none', width: '80%' }} placeholder="e-mail" />
                        <Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 5, fontSize: 13, width: '20%' }}>OK</Button>
                    </Col>
                    <p style={{ marginBottom: 1, fontSize: 13 }}>Nous suivre</p>
                    <Col style={{ display: 'flex', flexDirection: 'row', paddingLeft: 0, paddingRight: 0, justifyContent: 'center' }}>
                        <Col xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <img style={{ width: 40, height: 40 }} src="./rsfacebook.png" alt='iconfacebook' />
                        </Col>
                        <Col xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <img style={{ width: 40, height: 40 }} src="./rsinstagram.png" alt='iconinstagram' />
                        </Col>
                        <Col xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <img style={{ width: 40, height: 40 }} src="./rstwitter.png" alt='icontwitter' />
                        </Col>
                    </Col>
                </Col>
                <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
                    <h7 style={{ marginBottom: 10 }}>CONTACTER MULMUG</h7>
                    <p style={{ marginBottom: 1, fontSize: 13 }}>Par courrier:</p>
                    <p style={{ marginBottom: 1, fontSize: 13 }}>MULMUG SAS</p>
                    <p style={{ marginBottom: 1, fontSize: 13 }}>14 rue de Solférino</p>
                    <p style={{ marginBottom: 10, fontSize: 13 }}>92100 Boulogne-Billancourt</p>

                    <Button style={{ backgroundColor: '#FFFFFF', border: 'none', borderRadius: 50, fontSize: 13, width: '100%', color: '#1F8A9E' }}>Contactez nous par mail</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <p style={{ color: '#1F8A9E', fontSize: 12 }}>© Copyright 2021 MULMUG - All Rights Reserved</p>
                </Col>
            </Row>

        </Container>



    )
}

export default Footer;