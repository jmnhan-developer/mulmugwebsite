import React from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';





function Header() {




    return (
        <Container>
            <Row style={{ display: 'flex', flexDirection: 'row', background: "linear-gradient(#54C5B4, #1F8A9E)", marginLeft:0, marginRight:0, paddingLeft:0, paddingRight:0 }}>
                <Col xs={12} md={4} >
                    <Link to='/'><img width='80%' src="./logomulmugwhite.png" /></Link>
                </Col>
                <Col xs={12} md={8} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <Link to="/Mulmugplusabond" style={{ textDecorationLine: 'none' }}><p style={{ backgroundColor: '#FFC700', color: '#FFFFFF', fontWeight: 'bold', paddingRight: 5, width: 200, borderRadius: 10, textAlign: 'center', margin:5 }}>MULMUG PLUS</p></Link>
                    <Link to="/SigninScreen" style={{ textDecorationLine: 'none' }}><p style={{ width:110, color: '#FFFFFF', margin:5 }}>Me connecter</p></Link>
                </Col>
            </Row>
        </Container>

    )
}


var styleRow = {

}
export default Header;