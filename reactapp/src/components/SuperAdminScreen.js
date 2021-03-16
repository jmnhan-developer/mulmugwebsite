import React, { useState } from 'react'
import { Row, Button, Col, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Header from './header.js'
import Footer from './footer.js'




function SuperAdminScreen(props) {


    const [adminFirstName, setAdminFirstName] = useState('')
    const [adminLastName, setAdminLastName] = useState('')
    const [adminPosition, setAdminPosition] = useState('')
    const [adminEmail, setAdminEmail] = useState('')
    const [adminPassword, setAdminPassword] = useState('')
    const [adminRole, setAdminRole] = useState('')

    const [adminExists, setAdminExists] = useState(false)
    const [listErrorsSignup, setErrorsSignup] = useState([])

    const [superAdminFirstName, setSuperAdminFirstName] = useState('')
    const [superAdminLastName, setSuperAdminLastName] = useState('')
    const [superAdminPosition, setSuperAdminPosition] = useState('')
    const [superAdminEmail, setSuperAdminEmail] = useState('')
    const [superAdminPassword, setSuperAdminPassword] = useState('')
    const [superAdminRole, setSuperAdminRole] = useState('')

    const [superAdminExists, setSuperAdminExists] = useState(false)


    // CRÉATION D'UN COMPTE ADMIN

    var handleSubmitAdminCreation = async () => {
        console.log("HELLO WORLD")

        const data = await fetch('/admincreation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `adminFirstNameFromFront=${adminFirstName}&adminLastNameFromFront=${adminLastName}&adminPositionFromFront=${adminPosition}&adminEmailFromFront=${adminEmail}&adminPasswordFromFront=${adminPassword}&adminRoleFromFront=${adminRole}`
        })

        console.log(data.body + "HELLO WORLD")

        const body = await data.json()

        if (body.result == true) {
            setAdminExists(true)
            props.addToken(body.token)
        } else {
            setErrorsSignup(body.error)
        }

    }

    if (adminExists) {
        return (<p style={{ fontSize: 20, color: '#FDC41F' }}>Un admin a bien été créé!</p>)
        // return <Redirect to='/homepageconnectedparent' />
    }

    var tabErrorsSignup = listErrorsSignup.map((error, i) => {
        return (<p style={{ color: 'red' }}>{error}</p>)
    })

    // CRÉATION D'UN COMPTE SUPER ADMIN

    var handleSubmitSuperAdminCreation = async () => {
        console.log("HELLO WORLD")

        const data = await fetch('/superadmincreation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `superAdminFirstNameFromFront=${superAdminFirstName}&superAdminLastNameFromFront=${superAdminLastName}&superAdminPositionFromFront=${superAdminPosition}&superAdminEmailFromFront=${superAdminEmail}&superAdminPasswordFromFront=${superAdminPassword}&superAdminRoleFromFront=${superAdminRole}`
        })

        console.log(data.body + "HELLO WORLD")

        const body = await data.json()

        if (body.result == true) {
            setSuperAdminExists(true)
            props.addToken(body.token)
        } else {
            setErrorsSignup(body.error)
        }

    }

    if (superAdminExists) {
        return (<p style={{ fontSize: 20, color: '#FDC41F' }}>Un admin a bien été créé!</p>)
        // return <Redirect to='/homepageconnectedparent' />
    }

    var tabErrorsSignup = listErrorsSignup.map((error, i) => {
        return (<p style={{ color: 'red' }}>{error}</p>)
    })

    return (

        <div>

            <Header />

            <div>
                {/* CREATION ADMIN */}

                <Row form style={{ display: 'flex', justifyContent: 'center', paddingLeft: 15, paddingRight: 15 }}>
                    <Col xs={12} md={6} style={{ width: 500 }}>
                        <FormGroup>
                            <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>CRÉER UN COMPTE ADMIN</p>
                        </FormGroup>
                        <FormGroup>
                            <Input type="firstName" name="firstName" id="adminFirstName" placeholder="Prénom" style={styleInput} value={adminFirstName} onChange={(e) => setAdminFirstName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="name" name="name" id="adminName" placeholder="Nom" style={styleInput} value={adminLastName} onChange={(e) => setAdminLastName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="name" name="position" id="adminPosition" placeholder="Fonction" style={styleInput} value={adminPosition} onChange={(e) => setAdminPosition(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" name="email" id="adminEmail" placeholder="Adresse e-mail" style={styleInput} value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" name="password" id="adminPassword" placeholder="Mot de passe" style={styleInput} value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" name="role" id="adminRole" placeholder="Rôle" style={styleInputClasse} value={adminRole} onChange={(e) => setAdminRole(e.target.value)} >
                                <option>Rôle</option>
                                <option>Admin</option>
                                <option>Super Admin</option>
                            </Input>
                        </FormGroup>
                        {tabErrorsSignup}
                        <Row style={{ display: 'flex', justifyContent: 'center', marginTop: 40, marginBottom: 40 }}>
                            <Button style={{ width: 300, backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }} onClick={() => handleSubmitAdminCreation()}>VALIDER</Button>
                        </Row>
                    </Col>


                    {/* CRÉATION SUPER ADMIN */}

                    <Col xs={12} md={6} style={{ width: 500 }}>
                        <FormGroup>
                            <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>CRÉER UN COMPTE SUPER ADMIN</p>
                        </FormGroup>
                        <FormGroup>
                            <Input type="firstName" name="superfirstName" id="adminFirstName" placeholder="Prénom" style={styleInput} value={superAdminFirstName} onChange={(e) => setSuperAdminFirstName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="name" name="supername" id="adminName" placeholder="Nom" style={styleInput} value={superAdminLastName} onChange={(e) => setSuperAdminLastName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="name" name="superposition" id="adminPosition" placeholder="Fonction" style={styleInput} value={superAdminPosition} onChange={(e) => setSuperAdminPosition(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" name="superemail" id="adminEmail" placeholder="Adresse e-mail" style={styleInput} value={superAdminEmail} onChange={(e) => setSuperAdminEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" name="superpassword" id="adminPassword" placeholder="Mot de passe" style={styleInput} value={superAdminPassword} onChange={(e) => setSuperAdminPassword(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" name="superrole" id="adminRole" placeholder="Rôle" style={styleInputClasse} value={superAdminRole} onChange={(e) => setSuperAdminRole(e.target.value)} >
                                <option>Rôle</option>
                                <option>Admin</option>
                                <option>Super Admin</option>
                            </Input>
                        </FormGroup>
                        {tabErrorsSignup}
                        <Row style={{ display: 'flex', justifyContent: 'center', marginTop: 40, marginBottom: 40 }}>
                            <Button style={{ width: 300, backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }} onClick={() => handleSubmitSuperAdminCreation()}>VALIDER</Button>
                        </Row>
                    </Col>
                </Row>

            </div>


            <Footer />

        </div>




    )
}

var styleInput = {
    border: 'none',
    borderRadius: 50,
    backgroundColor: '#ECF0F1'
};

var styleInputClasse = {
    display: 'flex',
    border: 'none',
    borderRadius: 50,
    backgroundColor: '#ECF0F1',
    textAlign: "flex-start",
    color: 'grey'
}

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
)(SuperAdminScreen)
