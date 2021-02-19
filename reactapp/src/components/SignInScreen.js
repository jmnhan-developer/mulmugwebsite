import React, { useState } from 'react'
import { Container, Row, Button, Col, Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';


import Header from './header.js'
import Footer from './footer.js'


function SignInscreen() {

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')
    const [userExists, setUserExists] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [roleState, setRoleState] = useState('')
    const [listErrorsSignIn, setErrorsSignIn] = useState([])
     // CREATION DE LA MODAL
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    var handleSubmitSignIn = async () => {

        console.log('TEST FETCH')
        const data = await fetch('/sign-in', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `emailFromFront=${signInEmail}&passwordFromFront=${signInPassword}`
        })


        const body = await data.json()
        console.log(body)

        console.log('TEST ROUTE SIGN-IN')


        if (body.result == true) {
            // props.addToken(body.token)
            setUserExists(true)
            setRoleState(body.user.role)
        } else {
            setErrorsSignIn(body.error)
        }
    }

    if (roleState == 'Student') {
        return <Redirect to='/studenthomescreen' />
    } else if (roleState == 'Parent') {
        return <Redirect to='/parenthomescreen' />
    }

    var tabErrorsSignin = listErrorsSignIn.map((error, i) => {
        return (<p>{error}</p>)
    })

    

    return (

        <Container>
            <Row>
                <Header />
            </Row>

            {/* BLOC SIGN-IN */}

            <Row style={{ marginTop: 30, paddingLeft: 15, paddingRight: 15, color: 'white', justifyContent: 'center', }}>
                <Col xs={12} md={5} style={{ backgroundColor: '#1F8A9E', borderRadius: 10, margin: 5, marginBottom:40 }}>
                    <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                        <p style={{ margin: 0 }}>Tu as déjà un compte Mulmug?</p>
                        <h5>Connecte-toi ici</h5>
                    </Row>
                    <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                        <FormGroup style={{ width: '100%'}}>
                            <Label for="Email">E-mail</Label>
                            <Input
                                style={{borderRadius:50}}
                                type="email"
                                value={signInEmail}
                                onChange={(e) => setSignInEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup style={{ width: '100%' }}>
                            <Label for="Password">Password</Label>
                            <Input
                                style={{borderRadius:50}}
                                type="password"
                                value={signInPassword}
                                onChange={(e) => setSignInPassword(e.target.value)} />
                        </FormGroup>
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
                        <Button onClick={() => handleSubmitSignIn()} style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }}>ME CONNECTER</Button>
                    </Row>
                </Col>

                {/* BLOC INFORMATION ET REDIRECTION SIGN-UP */}

                <Col xs={12} md={5} style={{ margin: 5, color: '#1F8A9E' }}>
                    <Row style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', padding: 5, marginBottom: 10 }}>
                        <p style={{ margin: 0 }}>Pas encore de compte Mulmug?</p>
                        <h5>Télécharge l'application Mulmug sur ton smartphone et inscris-toi facilement. </h5>
                    </Row>
                    <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: 5, marginTop: 10 }}>
                        <img width='30%' height="100%" src="./appstorelogo.png" alt='appstorelogo' />
                        <img width='30%' height="100%" src="./googleplaylogo.png" alt='googleplaylogo' />
                    </Row>
                    <Row style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', padding: 5, marginTop: 20 }}>
                        <p style={{ margin: 0 }}>Sinon tu peux aussi t'inscrire en cliquant sur le bouton ci-dessous:</p>
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: 'center', marginTop: 15, marginBottom: 40 }}>
                        <Button color="danger" onClick={toggle} style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }}>CRÉER UN COMPTE</Button>
                        <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader toggle={toggle}>Créer un compte Mulmug</ModalHeader>
                            <ModalBody>
                                Dis-nous si tu es ÉLÈVE et tu souhaites créer un compte pour faire des exercice et gagner des points ou si tu es PARENT et tu veux créer un compte pour ton enfant...
                            </ModalBody>
                            <ModalFooter style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                <Link to="./SignUpScreenStudent"><Button onClick={toggle} style={{width:150, height:50, backgroundColor:'#FFC300', border:'none', borderRadius:10, fontSize:25, fontWeight:'bold'}}>ÉLÈVE</Button></Link>
                                <Link to="./SignUpScreenParent"><Button onClick={toggle} style={{width:150, height:50, backgroundColor:'#00B2C3', border:'none', borderRadius:10, fontSize:25, fontWeight:'bold'}}>PARENT</Button></Link>
                            </ModalFooter>
                        </Modal>
                    </Row>
                </Col>

            </Row>




            <Footer />

        </Container>
    )
};

export default SignInscreen;