import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import { Redirect } from "react-router-dom";

export default function Login(props) {

    const [signInEmail, setSignInEmail] = useState('')
    const [signInPassword, setSignInPassword] = useState('')
    const [userExists, setUserExists] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [roleState, setRoleState] = useState('')
    const [listErrorsSignIn, setErrorsSignIn] = useState([])


    var handleSubmitSignIn = async () => {

        console.log('TEST FETCH')
        const data = await fetch('/sign-in', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
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
        <div className="Login">
            <h1>Page Connexion Mulumug</h1>
            <Col item xs={12} lg={12} xl={2}>
            <FormGroup>
                <Label for="Email">Email</Label>
                <Input type="email"
                    value={signInEmail}
                    onChange={(e) => setSignInEmail(e.target.value)} />
            </FormGroup>
            <FormGroup>
                <Label for="Password">Password</Label>
                <Input
                    type="password"
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)} />
            </FormGroup>
            <Button onClick={() => handleSubmitSignIn()} block size="lg" type="submit" >
            Connexion            
            </Button>
            </Col>
        </div>
    );
}

