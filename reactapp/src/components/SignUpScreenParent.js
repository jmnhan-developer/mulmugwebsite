import React, { useState } from 'react'
import { Container, Row, Button, Col, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Header from './header.js'
import Footer from './footer.js'


function SignUpScreenParent(props) {

    const [userGender, setUserGender] = useState('')
    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const [studentGender, setStudentGender] = useState('')
    const [studentFirstName, setStudentFirstName] = useState('')
    const [studentLastName, setStudentLastName] = useState('')
    const [studentGrade, setStudentGrade] = useState('')
    const [studentEmail, setStudentEmail] = useState('')
    const [studentAddress, setStudentAddress] = useState('')
    const [studentAddressComp, setStudentAddressComp] = useState('')
    const [studentZip, setStudentZip] = useState('')
    const [studentCity, setStudentCity] = useState('')
    const [studentBirthday, setStudentBirthday] = useState('')
    const [studentSchool, setStudentSchool] = useState('')

    const [selectedMadame, setSelectedMadame] = useState(false)
    const [selectedMonsieur, setSelectedMonsieur] = useState(false)

    const [selectedGirl, setSelectedGirl] = useState(false)
    const [selectedBoy, setSelectedBoy] = useState(false)

    const [userExists, setUserExists] = useState(false)

    const [listErrorsSignup, setErrorsSignup] = useState([])





    // CHANGEMENT DE COULEUR DU BUTTON MADAME ET MONSIEUR LORSQU'IL EST SÉLECTIONNÉ

    var styleButtonMadame = {
        marginRight: 10,
        width: 150,
        backgroundColor: '#FFFFFF',
        border: 'none',
        borderRadius: 50,
        boxShadow: '3px 3px 3px #D5DBDB',
        color: '#1F8A9E'
    };

    var styleButtonMonsieur = {
        marginRight: 10,
        width: 150,
        backgroundColor: '#FFFFFF',
        border: 'none',
        borderRadius: 50,
        boxShadow: '3px 3px 3px #D5DBDB',
        color: '#1F8A9E'
    };

    var handleClickMadame = () => {
        setSelectedMadame(!selectedMadame)
    };
    if (selectedMadame === true) {
        styleButtonMadame = {
            marginRight: 10,
            width: 150,
            backgroundColor: 'black',
            border: 'none',
            borderRadius: 50,
            boxShadow: '3px 3px 3px #D5DBDB',
            color: '#FFFFFF'
        }

    }

    var handleClickMonsieur = () => {
        setSelectedMonsieur(!selectedMonsieur)
    }
    if (selectedMonsieur === true) {
        styleButtonMonsieur = {
            marginRight: 10,
            width: 150,
            backgroundColor: 'black',
            border: 'none',
            borderRadius: 50,
            boxShadow: '3px 3px 3px #D5DBDB',
            color: '#FFFFFF'
        }
    }

    // CHANGEMENT DE COULEUR DU BUTTON FILLE ET GARÇON LORSQU'IL EST SÉLECTIONNÉ

    var styleButtonGirl = {
        marginRight: 10,
        width: 150,
        backgroundColor: '#FFFFFF',
        border: 'none',
        borderRadius: 50,
        boxShadow: '3px 3px 3px #D5DBDB',
        color: '#1F8A9E'
    };

    var styleButtonBoy = {
        marginRight: 10,
        width: 150,
        backgroundColor: '#FFFFFF',
        border: 'none',
        borderRadius: 50,
        boxShadow: '3px 3px 3px #D5DBDB',
        color: '#1F8A9E'
    };

    var handleClickGirl = () => {
        setSelectedGirl(!selectedGirl)
    }
    if (selectedGirl === true) {
        styleButtonGirl = {
            marginRight: 10,
            width: 150,
            backgroundColor: 'black',
            border: 'none',
            borderRadius: 50,
            boxShadow: '3px 3px 3px #D5DBDB',
            color: '#FFFFFF'
        }
    };

    var handleClickBoy = () => {
        setSelectedBoy(!selectedBoy)
    }
    if (selectedBoy === true) {
        styleButtonBoy = {
            marginRight: 10,
            width: 150,
            backgroundColor: 'black',
            border: 'none',
            borderRadius: 50,
            boxShadow: '3px 3px 3px #D5DBDB',
            color: '#FFFFFF'
        }
    };

    // INSCRIPTION D'UN ELEVE PAR SES PARENTS

    var handleSubmitUserSignup = async () => {
        console.log("HELLO WORLD")

        const data = await fetch('/usersignup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `userGenderFromFront=${userGender}&userFirstNameFromFront=${userFirstName}&userLastNameFromFront=${userLastName}&userEmailFromFront=${userEmail}&userPasswordFromFront=${userPassword}&studentGenderFromFront=${studentGender}&studentFirstNameFromFront=${studentFirstName}&studentLastNameFromFront=${studentLastName}&studentGradeFromFront=${studentGrade}&studentEmailFromFront=${studentEmail}&studentAddressFromFront=${studentAddress}&studentAdressCompFromFront=${studentAddressComp}&studentZipFromFront=${studentZip}&studentCityFromFront=${studentCity}&studentBirthdayFromFront=${studentBirthday}&studentSchoolFromFront=${studentSchool}`
        })

        console.log(data.body + "HELLO WORLD")

        const body = await data.json()

        if (body.result == true) {
            setUserExists(true)
            props.addToken(body.token)
        } else {
            setErrorsSignup(body.error)
        }
        
    }

    if (userExists) {
        return <Redirect to='/' />
    }

    var tabErrorsSignup = listErrorsSignup.map((error, i) => {
        return (<p style={{color:'red'}}>{error}</p>)
    })

    return (

        <Container>
            <Row>
                <Header />
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30, paddingLeft: 15, paddingRight: 15 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Pour inscrire mon enfant..</h4>
            </Row>

            <Row form style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
                <Col xs={12} md={8} style={{ width: 700 }}>
                    <FormGroup>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>MON PROFIL</p>
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={() => handleClickMadame()} style={styleButtonMadame} >MADAME</Button>
                        <Button onClick={() => handleClickMonsieur()} style={styleButtonMonsieur} >MONSIEUR</Button>
                    </FormGroup>
                    <FormGroup>
                        <Input type="firstName" name="firstName" id="userFirstName" placeholder="Mon prénom" style={styleInput} value={userFirstName} onChange={(e) => setUserFirstName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="name" name="name" id="userName" placeholder="Mon nom" style={styleInput} value={userLastName} onChange={(e) => setUserLastName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="email" name="email" id="userEmail" placeholder="Mon adresse e-mail" style={styleInput} value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" id="userPassword" placeholder="Mon mot de passe" style={styleInput} value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" name="password" id="userConfirmPassword" placeholder="Confirmer mon mot de passe" style={styleInput} />
                    </FormGroup>
                </Col>
            </Row>

            <Row form style={{ display: 'flex', justifyContent: 'center' }}>
                <Col xs={12} md={8} style={{ width: 700 }}>
                    <FormGroup>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>MON ENFANT</p>
                    </FormGroup>
                    <FormGroup>
                        <Button onClick={() => handleClickGirl()} style={styleButtonGirl}>FILLE</Button>
                        <Button onClick={() => handleClickBoy()} style={styleButtonBoy}>GARÇON</Button>
                    </FormGroup>
                    <FormGroup>
                        <Input type="firstName" name="firstName" id="studentFirstName" placeholder="Son prénom" style={styleInput} value={studentFirstName} onChange={(e) => setStudentFirstName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="name" name="name" id="studentName" placeholder="Son nom" style={styleInput} value={studentLastName} onChange={(e) => setStudentLastName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" name="select" id="exampleSelect" placeholder="Sa classe" style={styleInputClasse} value={studentGrade} onChange={(e) => setStudentGrade(e.target.value)} >
                            <option>Sa classe</option>
                            <option>6ème</option>
                            <option>5ème</option>
                            <option>4ème</option>
                            <option>3ème</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input type="email" name="email" id="studentEmail" placeholder="Son adresse e-mail" style={styleInput} value={studentEmail} onChange={(e) => setStudentEmail(e.target.value)} />
                    </FormGroup>
                </Col>
                {tabErrorsSignup}
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center', marginTop: 40, marginBottom: 40 }}>
                <Button style={{ width: 300, backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }} onClick={() => handleSubmitUserSignup()}>VALIDER</Button>
            </Row>

            <Footer />

        </Container>
    )
};


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
)(SignUpScreenParent)
