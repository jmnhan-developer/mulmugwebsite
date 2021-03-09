import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'






function Homescreen() {

    return (
        <Container style={{ display: 'flex', flexDirection: 'column', backgroundImage: 'url(./hpbackground.png)', height: '100vh', backgroundPosition: 'center' }}>

            <Row style={{ marginBottom: 150 }}>
                <Link to="/">
                    <img style={{ paddingLeft: 0 }} src="./logomulmugwhite.png" width='30%' className="d-inline-block align-top" alt="logo" />
                </Link>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center', marginBottom: 100 }}>

                <h4 style={{ width: 800, marginLeft: 50, marginRight: 50, color: 'white' }}>
                    Mulmug, "the More You Learn, the More You Get", littéralement "plus tu apprends, plus tu gagnes", est la première plateforme gratuite d’apprentissage des matières scolaires qui récompense le travail et les efforts des élèves…
                </h4>


                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Col xs={6} md={4} style={{ display: 'flex', justifyContent: 'center', padding: 0, margin: 5 }}>
                        <Link to="/HomeScreenStudent" style={{ width: 300, height: 80, backgroundColor: '#FFC300', borderRadius: 10, outline: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecorationLine: 'none', color: "white", marginBottom: 5 }}>
                            <h4 style={{ marginBottom: 1 }}>Je suis ELEVE</h4>
                            <p style={{ marginBottom: 1 }}>En savoir plus...</p>
                        </Link>
                    </Col>
                    <Col xs={6} md={4} style={{ display: 'flex', justifyContent: 'center', padding: 0, margin: 5 }}>
                        <Link to="/HomeScreenParent" style={{ width: 300, height: 80, backgroundColor: '#00B2C3', borderRadius: 10, outline: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecorationLine: 'none', color: "white", marginBottom: 5 }}>
                            <h4 style={{ marginBottom: 1 }}>Je suis PARENT</h4>
                            <p style={{ marginBottom: 1 }}>En savoir plus...</p>
                        </Link>
                    </Col>
                </Row>

            </Row>



        </Container >

    )
}


export default Homescreen;

