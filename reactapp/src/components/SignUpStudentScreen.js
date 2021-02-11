import React, { useState } from "react";
import { Button, FormGroup, Label, Input, Col } from 'reactstrap';

export default function SignupStudent(props) {

    const [signUpFirstName, setSignUpFirstName] = useState('')
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [signUpSex, setSignUpSex] = useState('')
    const [signUpLastName, setSignUpLastName] = useState('')
    const [signUpGrade, setSignUpGrade] = useState('')

    var handleSubmitSignup = async () => {
        console.log("HELLO WORLD")

        const data = await fetch('/sign-up/student', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `sexFromFront=${signUpSex}&firstNameFromFront=${signUpFirstName}&lastNameFromFront=${signUpLastName}&emailFromFront=${signUpEmail}&&passwordFromFront=${signUpPassword}`
        })
        console.log(data.body + "HELLO WORLD")

        const body = await data.json()
    }  
        return (
            <div className="Signup">
                <h1>Page Inscription STUDENT Mulumug</h1>
                <Col item xs={12} lg={12} xl={2}>
                    <FormGroup>
                        <Label for="Prenom">Prénom</Label>
                        <Input type="text"
                            value={signUpFirstName}
                            onChange={(e) => setSignUpFirstName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Nom">Nom</Label>
                        <Input type="text"
                            value={signUpLastName}
                            onChange={(e) => setSignUpLastName(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Text">Classe</Label>
                        <Input type="text"
                            value={signUpGrade}
                            onChange={(e) => setSignUpGrade(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Email">Email</Label>
                        <Input type="email"
                            value={signUpEmail}
                            onChange={(e) => setSignUpEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" value={signUpSex} onChange={(e) => setSignUpSex(e.target.value)} >
                            <option>Homme</option>
                            <option>Femme</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input
                            type="password"
                            value={signUpPassword}
                            onChange={(e) => setSignUpPassword(e.target.value)} />
                    </FormGroup>
                    <Button onClick={() => handleSubmitSignup()} block size="lg" type="submit" >
                        Je m'inscris
            </Button>
                </Col>
            </div>
        );
         
}
