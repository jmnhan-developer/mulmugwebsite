import React, { useState } from 'react'
import { Row, Button, Col, Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './header.js'
import Footer from './footer.js'


function SignInAdmin(props) {

    const [adminEmail, setAdminEmail] = useState('')
    const [adminPassword, setAdminPassword] = useState('')
    const [adminExists, setAdminExists] = useState(false)

    const [superAdminEmail, setSuperAdminEmail] = useState('')
    const [superAdminPassword, setSuperAdminPassword] = useState('')
    const [superAdminExists, setSuperAdminExists] = useState(false)


    const [redirect, setRedirect] = useState(false)
    const [roleState, setRoleState] = useState('')
    const [listErrorsSignin, setErrorsSignin] = useState([])





    // SIGN IN ADMIN
    var handleSubmitAdminSignIn = async () => {

        console.log('TEST FETCH')
        const data = await fetch('/adminsignin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `adminEmailFromFront=${adminEmail}&adminPasswordFromFront=${adminPassword}`
        })

        const body = await data.json()
        console.log(body)

        console.log('TEST ROUTE SIGN-IN')


        if (body.result === true) {
            setAdminExists(true)
            props.addToken(body.token)
            // setRoleState(body.user.role)
        } else {
            setErrorsSignin(body.error)
        }
    }

    if (adminExists) {
        return <Redirect to='/HomeAdminScreen' />
    }

    var tabErrorsSignin = listErrorsSignin.map((error, i) => {
        return (<p style={{ color: 'red' }}>{error}</p>)
    })


    // ACCEDER A L'ÉCRAN SUPER ADMIN
    var handleSubmitSuperAdminSignIn = async () => {

        console.log('TEST FETCH')
        const data = await fetch('/superadminsignin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `superAdminEmailFromFront=${superAdminEmail}&superAdminPasswordFromFront=${superAdminPassword}`
        })


        const body = await data.json()
        console.log(body)

        console.log('TEST ROUTE SIGN-IN')


        if (body.result === true) {
            setSuperAdminExists(true)
            props.addToken(body.token)
            // setRoleState(body.user.role)
        } else {
            setErrorsSignin(body.error)
        }
    }

    if (superAdminExists) {
        return <Redirect to='/SuperAdminScreen' />
    }

    var tabErrorsSignin = listErrorsSignin.map((error, i) => {
        return (<p style={{ color: 'red' }}>{error}</p>)
    })




    return (

        <div>

            <Header />

            <div style={{ marginLeft: 20, marginRight: 20 }}>

                {/* BLOC SIGN-IN ADMIN */}

                <Row style={{ marginTop: 30, paddingLeft: 15, paddingRight: 15, color: 'white', justifyContent: 'center' }}>
                    <Col xs={12} md={5} style={{ backgroundColor: '#1F8A9E', borderRadius: 10, margin: 5, marginBottom: 40 }}>
                        <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                            <p style={{ margin: 0 }}>Collaborateur de Mulmug?</p>
                            <h5>Connecte-toi ici</h5>
                        </Row>
                        <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                            <FormGroup style={{ width: '100%' }}>

                                <Input
                                    style={{ borderRadius: 50 }}
                                    type="email"
                                    name="adminEmail"
                                    placeholder="E-mail"
                                    value={adminEmail}
                                    onChange={(e) => setAdminEmail(e.target.value)} />
                            </FormGroup>
                            <FormGroup style={{ width: '100%' }}>

                                <Input
                                    style={{ borderRadius: 50 }}
                                    type="password"
                                    name="adminPassword"
                                    placeholder="Mot de passe"
                                    value={adminPassword}
                                    onChange={(e) => setAdminPassword(e.target.value)} />
                            </FormGroup>
                            {tabErrorsSignin}
                        </Row>
                        <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40 }}>
                            <Button onClick={() => handleSubmitAdminSignIn()} style={{ width: 150, backgroundColor: '#FDC41F', border: 'none', borderRadius: 50, marginTop: 5, marginBottom: 5 }}>TE CONNECTER</Button>
                        </Row>
                    </Col>

                    {/* BLOC SIGN-IN SUPER ADMIN */}
                    <Col xs={12} md={5} style={{ backgroundColor: '#54C5B4', borderRadius: 10, margin: 5, marginBottom: 40 }}>
                        <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                            <p style={{ margin: 0 }}>Tu es Super Admin?</p>
                            <h5>Connecte-toi ici</h5>
                        </Row>
                        <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                            <FormGroup style={{ width: '100%' }}>

                                <Input
                                    style={{ borderRadius: 50 }}
                                    type="email"
                                    name="superAdminEmail"
                                    placeholder="E-mail"
                                    value={superAdminEmail}
                                    onChange={(e) => setSuperAdminEmail(e.target.value)} />
                            </FormGroup>
                            <FormGroup style={{ width: '100%' }}>

                                <Input
                                    style={{ borderRadius: 50 }}
                                    type="password"
                                    name="superAdminPassword"
                                    placeholder="Mot de passe"
                                    value={superAdminPassword}
                                    onChange={(e) => setSuperAdminPassword(e.target.value)} />
                            </FormGroup>
                            {tabErrorsSignin}
                        </Row>
                        <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40 }}>
                            <Button onClick={() => handleSubmitSuperAdminSignIn()} style={{ width: 150, backgroundColor: '#FDC41F', border: 'none', borderRadius: 50, marginTop: 5, marginBottom: 5 }}>TE CONNECTER</Button>
                        </Row>
                    </Col>
                    <Row>

                        <Col style={{ margin: 5, marginBottom: 40, color: '#1F8A9E' }}>
                            <Row style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center', padding: 5, marginBottom: 10 }}>
                                <h5>FRESH NEWS</h5>
                            </Row>

                            <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: 5, marginTop: 20 }}>
                                <p style={{ margin: 0 }}> - Pour souhaiter la bienvenue à Louise, notre nouvelle Social Manageuse, rdv à l'accueil pour un petite déj le 10 Septembre 2021.</p>
                                <p style={{ margin: 0 }}> - Pour les vacances de la Toussaint, l'application MULMUG prend des allures d'Halloween!</p>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </div>

            <Footer />

        </div>
    )
};


function mapDispatchToProps(dispatch) {
    return {
        addToken: function (token) {
            dispatch({ type: 'addToken', token: token })
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SignInAdmin)
