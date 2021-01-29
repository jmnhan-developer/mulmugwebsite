import React from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom'






function Homescreen() {


    return (

        <Container style={{ backgroundColor: '#1F8A9E', height:740 }}>
            <Row>
                <Link to="/"><img src="./MULMUG_Logo_Secondaire(Blanc)_avec_sous_titre_transparent_RVB.png" width='20%' className="d-inline-block align-top" alt="logo" /></Link>
            </Row>
            <Row style={{ display:'flex', justifyContent:'center' }}>
                <p style={stylep}>Mulmug, "the More You Learn, the More You Get", littéralement "plus tu apprends, plus tu gagnes", est la première plateforme gratuite d’apprentissage des matières scolaires qui récompense le travail et les efforts des élèves…</p>
            </Row>

            <Row style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <Col xs='12'>
                    <Button style={stylehpbutton1}>
                        <Link to="/StudentHomeScreen" style={{textDecorationLine:'none'}}>
                            <h2 style={{ color: 'white'}}>Je suis ELEVE</h2>
                            <p style={{ color: 'white' }}>En savoir plus...</p>
                        </Link>
                    </Button>
                    <Button style={stylehpbutton2}>
                        <Link to="/ParentHomeScreen" style={{textDecorationLine:'none'}}>
                            <h2 style={{ color: 'white' }}>Je suis PARENT</h2>
                            <p style={{ color: 'white' }}>En savoir plus...</p>
                        </Link>
                    </Button>
                </Col>
            </Row>
        </Container>


    )
}

var stylehpbutton1 = { width:300, height:80, margin:'20px', backgroundColor: '#FFC300', color: "white", borderRadius: 10, outline:'none', border:'none', textDecorationLine: 'none'}

var stylehpbutton2 = { width:300, height:80, margin:'20px', backgroundColor: '#00B2C3', color: "white", borderRadius: 10, outline:'none', border:'none', textDecorationLine: 'none'}

var stylep = { marginLeft:20, margingRight:20, width: 1000, marginTop: 150, marginBottom: 100, fontSize: 30, color: 'white' }



export default Homescreen;

