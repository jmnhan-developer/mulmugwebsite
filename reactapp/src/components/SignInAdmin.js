import React, { useState } from 'react'
import { Row, Button, Col, Input, FormGroup } from 'reactstrap'
import { Redirect } from 'react-router-dom'
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


    const [listErrorsAdminSignin, setErrorsAdminSignin] = useState([])
    const [listErrorsSuperAdminSignin, setErrorsSuperAdminSignin] = useState([])


    // SIGN IN ADMIN
    var handleSubmitAdminSignIn = async () => {

        const data = await fetch('/administrators/adminsignin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `adminEmailFromFront=${adminEmail}&adminPasswordFromFront=${adminPassword}`
        })

        const body = await data.json()

        if (body.result === true) {
            props.addToken(body.token)
            setAdminExists(true)
        } else {
            setErrorsAdminSignin(body.error)
        }
    }

    if (adminExists) {
        return <Redirect to='/HomeAdminScreen' />
    }

    var tabErrorsAdminSignin = listErrorsAdminSignin.map((error, i) => {
        return (<p style={{ color: 'red' }}>{error}</p>)
    })


    // SIGN IN SUPER ADMIN
    var handleSubmitSuperAdminSignIn = async () => {

        const data = await fetch('/administrators/superadminsignin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `superAdminEmailFromFront=${superAdminEmail}&superAdminPasswordFromFront=${superAdminPassword}`
        })

        const body = await data.json()

        if (body.result === true) {
            props.addToken(body.token)
            setSuperAdminExists(true)
        } else {
            setErrorsSuperAdminSignin(body.error)
        }
    }

    if (superAdminExists) {
        return <Redirect to='/SuperAdminScreen' />
    }

    var tabErrorsSuperAdminSignin = listErrorsSuperAdminSignin.map((error, i) => {
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
                            {tabErrorsAdminSignin}
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
                            {tabErrorsSuperAdminSignin}
                        </Row>
                        <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 40 }}>
                            <Button onClick={() => handleSubmitSuperAdminSignIn()} style={{ width: 150, backgroundColor: '#FDC41F', border: 'none', borderRadius: 50, marginTop: 5, marginBottom: 5 }}>TE CONNECTER</Button>
                        </Row>
                    </Col>

                </Row>
            </div>

            <Footer />

        </div>
    )
};


function mapDispatchToProps(dispatch) {
    return {
        addToken: function (token) {
            dispatch({ type: 'addTokenFromSignInAdmin', token: token })
            dispatch({type: 'addTokenFromSignInSuperAdmin', token: token})
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(SignInAdmin)
