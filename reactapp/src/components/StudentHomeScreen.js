import React from 'react';
import { Container, Row, Button, Col, Card, CardImg, CardBody, CardText, } from 'reactstrap';
import { Link } from 'react-router-dom';

import StudentNav from './StudentNav.js';




function StudentHomeScreen() {





    return (

        <Container>
            <Row>
                <StudentNav />
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <h2> Prêts à apprendre et à gagner des points?!?</h2>
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Col sm={12} lg={6}>
                    <CardImg top width="30%" src="./images/threed_mockup1.png" alt="Card image cap" />
                </Col>
                <Col sm={12} lg={6}>
                    <CardBody>
                        <CardText >Télécharge l’application et fais les exercices des chapitres que tu étudies en cours en ce moment! Plus tu en feras, plus tu gagneras de points...</CardText>
                        <Button>Button</Button>
                        <Button>Button</Button>
                    </CardBody>
                </Col>
            </Row>
            <Row>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
            </Row>


            <Row >
                <Col xs='12' lg='6' xl='3' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <CardImg top width="15%" src="./images/threed_mockup1.png" alt="Card image cap" />
                    <CardBody>
                        <CardText >Télécharge l’application et fais les exercices des chapitres que tu étudies en cours en ce moment! Plus tu en feras, plus tu gagneras de points...</CardText>
                        <Button>Button</Button>
                        <Button>Button</Button>
                    </CardBody>
                </Col>
            </Row>
            <Row>

                <Card style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

                    <CardImg Col xs='12' lg='6' xl='3' top width="15%" src="./images/threed_mockup1.png" alt="Card image cap" />
                    <CardBody Col xs='12' lg='6' xl='3'>
                        <CardText >Télécharge l’application et fais les exercices des chapitres que tu étudies en cours en ce moment! Plus tu en feras, plus tu gagneras de points...</CardText>
                        <Button>Button</Button>
                        <Button>Button</Button>
                    </CardBody>

                </Card>

            </Row>
        </Container>




    )
}



export default StudentHomeScreen;