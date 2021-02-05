import React from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom'






function Homescreen() {

    return (
        <Container style={{ display:'flex', flexDirection:'column', backgroundImage: 'url(./hpbackground.png)', height: '100vh', backgroundPosition:'center', justifyContent: 'space-between',  }}>

            <Row>
                <Link to="/">
                    <img src="./logomulmug.png" width='30%' className="d-inline-block align-top" alt="logo" />
                </Link>
            </Row>

            <Row style={{ display:'flex', justifyContent:'center'}}>
                <p style={{ width:800, marginLeft: 50, marginRight: 50, fontSize: 25, color: 'white' }}>
                    Mulmug, "the More You Learn, the More You Get", littéralement "plus tu apprends, plus tu gagnes", est la première plateforme gratuite d’apprentissage des matières scolaires qui récompense le travail et les efforts des élèves…
                </p>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center', marginBottom:50}}>
                <Col xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to="/StudentHomeScreen" style={stylehpbutton1}>
                        <h4>Je suis ELEVE</h4>
                        <p>En savoir plus...</p>
                    </Link>
                </Col>
                <Col xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link to="/ParentHomeScreen" style={stylehpbutton2}>
                            <h4>Je suis PARENT</h4>
                            <p>En savoir plus...</p>
                        </Link>
                </Col>
            </Row>

        </Container >

    )
}


var stylehpbutton1 = { width: 250, backgroundColor: '#FFC300', borderRadius: 10, outline: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecorationLine: 'none', color: "white" }

var stylehpbutton2 = { width: 250, backgroundColor: '#00B2C3', borderRadius: 10, outline: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center',textDecorationLine: 'none', color: "white" }



export default Homescreen;

