import React, { useState } from 'react'
import { Row, Button, Col, FormGroup, Input } from 'reactstrap';
import Header from './header.js'
import Footer from './footer.js'


function SuperAdminScreen() {

    const [adminFirstName, setAdminFirstName] = useState('')
    const [adminLastName, setAdminLastName] = useState('')
    const [adminPosition, setAdminPosition] = useState('')
    const [adminEmail, setAdminEmail] = useState('')
    const [adminPassword, setAdminPassword] = useState('')
    const [adminRole, setAdminRole] = useState('')

    const [adminExists, setAdminExists] = useState(false)
    const [listErrorsAdminCreation, setErrorsAdminCreation] = useState([])
    const [listSuccessAdminCreation, setSuccessAdminCreation] = useState([])


    const [superAdminFirstName, setSuperAdminFirstName] = useState('')
    const [superAdminLastName, setSuperAdminLastName] = useState('')
    const [superAdminPosition, setSuperAdminPosition] = useState('')
    const [superAdminEmail, setSuperAdminEmail] = useState('')
    const [superAdminPassword, setSuperAdminPassword] = useState('')
    const [superAdminRole, setSuperAdminRole] = useState('')

    const [superAdminExists, setSuperAdminExists] = useState(false)
    const [listErrorsSuperAdminCreation, setErrorsSuperAdminCreation] = useState([])
    const [listSuccessSuperAdminCreation, setSuccessSuperAdminCreation] = useState([])


    //ROUTE POUR LA CRÉATION D'UN COMPTE ADMIN

    var handleSubmitAdminCreation = async () => {

        const data = await fetch('/administrators/admincreation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `adminFirstNameFromFront=${adminFirstName}&adminLastNameFromFront=${adminLastName}&adminPositionFromFront=${adminPosition}&adminEmailFromFront=${adminEmail}&adminPasswordFromFront=${adminPassword}&adminRoleFromFront=${adminRole}`
        })

        const body = await data.json()

        if (body.result === true) {
            setAdminExists(true)
            setAdminFirstName ('')
            setAdminLastName ('')
            setAdminPosition ('')
            setAdminEmail ('')
            setAdminPassword('')
            setAdminRole('')
            setErrorsAdminCreation ([])
            setSuccessAdminCreation (body.success)
        } else {
            setErrorsAdminCreation(body.error)
        }
    }

    var tabErrorsAdminCreation = listErrorsAdminCreation.map((error, i) => {
        return (<p style={{ color: 'red' }}>{error}</p>)
    })
    var tabSuccessAdminCreation = listSuccessAdminCreation.map((success, i) => {
        return (<p style={{ color: 'green' }}>{success}</p>)
    })

    // ROUTE POUR LA CRÉATION D'UN COMPTE SUPER ADMIN

    var handleSubmitSuperAdminCreation = async () => {

        const data = await fetch('/administrators/superadmincreation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `superAdminFirstNameFromFront=${superAdminFirstName}&superAdminLastNameFromFront=${superAdminLastName}&superAdminPositionFromFront=${superAdminPosition}&superAdminEmailFromFront=${superAdminEmail}&superAdminPasswordFromFront=${superAdminPassword}&superAdminRoleFromFront=${superAdminRole}`
        })

        const body = await data.json()

        if (body.result === true) {
            setSuperAdminExists(true)
            setSuperAdminExists(true)
            setSuperAdminFirstName ('')
            setSuperAdminLastName ('')
            setSuperAdminPosition ('')
            setSuperAdminEmail ('')
            setSuperAdminPassword('')
            setSuperAdminRole('')
            setErrorsSuperAdminCreation ([])
            setSuccessSuperAdminCreation (body.success)
        } else {
            setErrorsSuperAdminCreation(body.error)
        }

    }



    var tabErrorsSuperAdminCreation = listErrorsSuperAdminCreation.map((error, i) => {
        return (<p style={{ color: 'red' }}>{error}</p>)
    })
    var tabSuccessSuperAdminCreation = listSuccessSuperAdminCreation.map((error, i) => {
        return (<p style={{ color: 'red' }}>{error}</p>)
    })

    return (

        <div>

            <Header />

            <div>
                {/* BLOC CREATION ADMIN */}

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
                        {tabErrorsAdminCreation}
                        {tabSuccessAdminCreation}
                        <Row style={{ display: 'flex', justifyContent: 'center', marginTop: 40, marginBottom: 40 }}>
                            <Button style={{ width: 300, backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }} onClick={() => handleSubmitAdminCreation()}>VALIDER</Button>
                        </Row>
                    </Col>


                    {/* BLOC CRÉATION SUPER ADMIN */}

                    <Col xs={12} md={6} style={{ width: 500 }}>
                        <FormGroup>
                            <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>CRÉER UN COMPTE SUPER ADMIN</p>
                        </FormGroup>
                        <FormGroup>
                            <Input type="firstName" name="superfirstName" id="superadminFirstName" placeholder="Prénom" style={styleInput} value={superAdminFirstName} onChange={(e) => setSuperAdminFirstName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="name" name="supername" id="superadminName" placeholder="Nom" style={styleInput} value={superAdminLastName} onChange={(e) => setSuperAdminLastName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="name" name="superposition" id="superadminPosition" placeholder="Fonction" style={styleInput} value={superAdminPosition} onChange={(e) => setSuperAdminPosition(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" name="superemail" id="superadminEmail" placeholder="Adresse e-mail" style={styleInput} value={superAdminEmail} onChange={(e) => setSuperAdminEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" name="superpassword" id="superadminPassword" placeholder="Mot de passe" style={styleInput} value={superAdminPassword} onChange={(e) => setSuperAdminPassword(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" name="superrole" id="superadminRole" placeholder="Rôle" style={styleInputClasse} value={superAdminRole} onChange={(e) => setSuperAdminRole(e.target.value)} >
                                <option>Rôle</option>
                                <option>Admin</option>
                                <option>Super Admin</option>
                            </Input>
                        </FormGroup>
                        {tabErrorsSuperAdminCreation}
                        {tabSuccessSuperAdminCreation}
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

// function mapDispatchToProps(dispatch) {
//     return {
//         addToken: function (token) {
//             dispatch({ type: 'addToken', token: token })
//         }
//     }
// }


// export default connect(
//     null,
//     mapDispatchToProps
// )(SuperAdminScreen)
export default SuperAdminScreen
