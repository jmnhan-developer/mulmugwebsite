import React, { useState } from 'react'
import { Container, Row, Button, Col, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';


import Header from './header.js'
import Footer from './footer.js'


function SignUpScreenParent() {


    return (

        <Container>
            <Row>
                <Header />
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30, paddingLeft: 15, paddingRight: 15 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Pour inscrire mon enfant..</h4>
            </Row>

            <Row form style={{ display: 'flex', justifyContent: 'center', marginBottom:40}}>
                <Col xs={12} md={8}>
                    <FormGroup>
                        <p style={{color:'#1F8A9E', fontWeight:'bold'}}>MON PROFIL</p>
                    </FormGroup>
                    <FormGroup>
                        <Button style={styleButtonGender}>MADAME</Button>
                        <Button style={styleButtonGender}>MONSIEUR</Button>
                    </FormGroup>
                    <FormGroup>
                        <Input type="firstName" name="firstName" id="firstName" placeholder="Prénom" style={styleInput} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="name" name="name" id="name" placeholder="Nom" style={styleInput} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Adresse e-mail" style={styleInput} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" id="Password" placeholder="Mot de passe" style={styleInput} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" id="Password" placeholder="Confirmer le mot de passe" style={styleInput} />
                    </FormGroup>
                </Col>
            </Row>

            <Row form style={{ display: 'flex', justifyContent: 'center'}}>
                <Col xs={12} md={8}>
                    <FormGroup>
                        <p style={{color:'#1F8A9E', fontWeight:'bold'}}>MON ENFANT</p>
                    </FormGroup>
                    <FormGroup>
                        <Button style={styleButtonGender}>FILLE</Button>
                        <Button style={styleButtonGender}>GARÇON</Button>
                    </FormGroup>
                    <FormGroup>
                        <Input type="firstName" name="firstName" id="firstName" placeholder="Prénom" style={styleInput} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="name" name="name" id="name" placeholder="Nom" style={styleInput} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" name="select" id="exampleSelect" placeholder="Classe" style={styleInputClasse}>
                            <option>Classe</option>
                            <option>6ème</option>
                            <option>5ème</option>
                            <option>4ème</option>
                            <option>3ème</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Adresse e-mail" style={styleInput} />
                    </FormGroup>
                </Col>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center', marginTop:40, marginBottom: 40 }}>
                <Button style={{ width:300, backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }}>VALIDER</Button>
            </Row>

            <Footer />

        </Container>
    )
};



var styleButtonGender = {
    marginRight:10,
    width:150,
    backgroundColor:'#FFFFFF',
    border:'none',
    borderRadius:50,
    boxShadow: '3px 3px 3px #D5DBDB',
    color:'#1F8A9E'
};

var styleInput = {
    border:'none',
    borderRadius:50,
    backgroundColor:'#ECF0F1'
};

var styleInputClasse = {
    display: 'flex',
    width: 615,
    border: 'none',
    borderRadius: 50,
    backgroundColor: '#ECF0F1',
    textAlign: "flex-start",
    color: 'grey'
}
export default SignUpScreenParent;