import React from 'react';
import { Row, Button, Col, Input } from 'reactstrap';
import { Link } from 'react-router-dom';






function Footer() {



    return (
        <div style={{background: "linear-gradient(#54C5B4, #1F8A9E)", color: 'white', marginTop:40}}>

            {/* LE FOOTER */}

            <Row style={{marginLeft:10, marginRight:10}}>
                <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
                    <p style={{ marginBottom: 10 }}>A PROPOS DE MULMUG</p>
                    <Link to='/QuiSommesNous' style={{ textDecorationLine: 'none' }}><p style={styleTextFooter}>Qui sommes nous?</p></Link>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={styleTextFooter}>Matières</p></Link>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={styleTextFooter}>Points Mulmug</p></Link>
                    <Link to='/Mulmugplusabond' style={{ textDecorationLine: 'none' }}><p style={styleTextFooter}>Abondement en points</p></Link>
                    <Link to='/MulmugPlusForfaitSansPub' style={{ textDecorationLine: 'none' }}><p style={styleTextFooter}>Forfait sans pub</p></Link>
                    <Link to='/Mulmugpluscahiers' style={{ textDecorationLine: 'none' }}><p style={styleTextFooter}>Cahiers de vacances</p></Link>
                    <Link to='/' style={{ textDecorationLine: 'none' }}><p style={styleTextFooter}>Nos partenaires</p></Link>
                </Col>
                <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
                    <p style={{ marginBottom: 10 }}>CONDITIONS</p>
                    <Link to='/MentionsLegales' style={{ textDecorationLine: 'none' }}><p style={styleTextFooter}>Mentions légales</p></Link>
                    <Link to='/ReglesDeConfidentialite' style={{ textDecorationLine: 'none' }}><p style={styleTextFooter}>Règle de confidentialité</p></Link>
                    {/* <Link to='/' style={{ textDecorationLine: 'none' }}><p style={styleTextFooter}>Sécurité</p></Link> */}
                    <Link to='/CgvCgu' style={{ textDecorationLine: 'none' }}><p style={styleTextFooter}>CGV - CGU</p></Link>
                    {/* <Link to='/' style={{ textDecorationLine: 'none' }}><p style={styleTextFooter}>Plan du site</p></Link> */}
                </Col>
                <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
                    <p style={{ marginBottom: 10 }}>RESTONS EN CONTACT</p>
                    <p style={{ marginBottom: 1, fontSize: 13 }}>Newsletter</p>
                    <Row style={{ display: 'flex', flexDirection: 'row', margin: 'none', paddingRight: 15, paddingLeft: 15 }}>
                        <Input style={{ width: '80%', marginBottom: 1, fontSize: 13, border: 'none', borderRadius: 50, backgroundColor: '#f8f9fa' }} type="email" name="email" id="exampleEmail" placeholder="adresse e-mail" />
                        <Button style={{ width: '20%', backgroundColor: '#FDC41F', border: 'none', borderRadius: 50, fontSize: 13 }}>OK</Button>
                    </Row>
                    <p style={{ marginBottom: 1, fontSize: 13 }}>Nous suivre</p>
                    <Row style={{ display: 'flex', flexDirection: 'row', paddingLeft: 0, paddingRight: 0, justifyContent: 'center' }}>
                        <Col xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <img style={{ width: 40, height: 40 }} src="./rsfacebook.png" alt='iconfacebook' />
                        </Col>
                        <Col xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <img style={{ width: 40, height: 40 }} src="./rsinstagram.png" alt='iconinstagram' />
                        </Col>
                        <Col xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <img style={{ width: 40, height: 40 }} src="./rstwitter.png" alt='icontwitter' />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
                    <p style={{ marginBottom: 10 }}>CONTACTER MULMUG</p>
                    <p style={{ marginBottom: 1, fontSize: 13 }}>Par courrier:</p>
                    <p style={{ marginBottom: 1, fontSize: 13 }}>MULMUG SAS</p>
                    <p style={{ marginBottom: 1, fontSize: 13 }}>14 rue de Solférino</p>
                    <p style={{ marginBottom: 10, fontSize: 13 }}>92100 Boulogne-Billancourt</p>

                    <Button style={{ backgroundColor: '#FFFFFF', border: 'none', borderRadius: 50, fontSize: 13, width: '100%', color: '#1F8A9E' }}>Contactez nous par mail</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <p style={{ color: '#FFFFFF', fontSize: 12 }}>© Copyright 2021 MULMUG - All Rights Reserved</p>
                </Col>
            </Row>

        </div>



    )
}

var styleTextFooter = {
    marginBottom: 1,
    fontSize: 13,
    color: 'white'
}
export default Footer;