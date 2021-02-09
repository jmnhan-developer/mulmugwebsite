import React from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';





function Header() {




    return (
        <Container>
            <Row style={{ display: 'flex', flexDirection: 'row', background: "linear-gradient(#54C5B4, #1F8A9E)" }}>
                <Col xs={12} md={4} >
                    <Link to='/'><img width='80%' src="./logomulmugwhite.png" /></Link>
                </Col>
                <Col xs={12} md={8} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Link to="/Mulmugplusabond" style={{ textDecorationLine: 'none' }}><p style={{ backgroundColor: '#FFC700', color: '#FFFFFF', fontWeight: 'bold', paddingRight: 5, width: 250, borderRadius: 10, textAlign: 'center' }}>MULMUG PLUS</p></Link>
                    <Link to='/login' style={{ textDecorationLine: 'none' }}><p style={{ color: '#FFFFFF', paddingLeft: 5 }}>Me connecter</p></Link>
                </Col>
            </Row>

        </Container>

    )
}

export default Header;