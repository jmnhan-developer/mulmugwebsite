import React from 'react';
import { Container, Row, Button, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, } from 'reactstrap';
import { Link } from 'react-router-dom';


import Header from './header.js';
import Footer from './footer.js'




function StudentHomeScreen() {


    return (

        <Container>
            <Row>
                <Header />
            </Row>

            {/* PRETS A APPRENDRE ET À GAGNER DES POINTS */}

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Prêts à apprendre et à gagner des points !</h4>
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'row' }}>
                <Col xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img width="30%" src="./threed_mockup1.png" alt='mockup1' />
                </Col>
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>Télécharge l’application et fais les exercices des chapitres que tu étudies en cours en ce moment! Plus tu en feras, plus tu gagneras de points...</p>
                    <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <img width='40%' height="100%" src="./appstorelogo.png" alt='appstorelogo' />
                        <img width='40%' height="100%" src="./googleplaylogo.png" alt='googleplaylogo' />
                    </Row>
                </Col>
            </Row>


            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '80%', marginTop: 50, marginBottom: 10 }} />
            </Row>

            {/* COMMENT ÇA MARCHE */}

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Comment ça marche ?</h4>
            </Row>
            <Row>
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'flex-start' }}>1. Je télécharge l’application et m’inscris en 2 minutes.</p>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'flex-start' }}>2. Je sélectionne la matière et le chapitre que je veux travailler et commence à faire des exercices.</p>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'flex-start' }}>3. Je gagne et cumule des points à chaque exercice correctement fait.</p>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'flex-start' }}>4. Je transforme mes points en bons d'achat.</p>
                </Col>
                <Col xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img width="30%" src="./threed_mockup1.png" alt='mockup1' />
                </Col>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '80%', marginTop: 50, marginBottom: 10 }} />
            </Row>

            {/* APPRENDS PROGRESSIVEMENT AVEC PLUS DE 100 MILLES EXERCICES */}

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Apprends progressivement avec plus de 100 milles exercices...</h4>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row' }}>
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ display: 'flex', width: 300, height: 70, backgroundColor: '#00AEBC', borderRadius: 10, textAlign: 'center', alignItems: 'center', color: 'white' }}>Suivi scrupuleux des Programmes officiels de l'Éducation Nationale.</p>
                    <p style={{ display: 'flex', width: 300, height: 70, backgroundColor: '#FFC700', borderRadius: 10, textAlign: 'center', alignItems: 'center', color: 'white' }}>100% développés par des professeurs encore en exercice.</p>
                    <p style={{ display: 'flex', width: 300, height: 70, backgroundColor: '#FF8300', borderRadius: 10, textAlign: 'center', alignItems: 'center', color: 'white' }}>Formats d'exercices variés et très ludiques.</p>
                </Col>
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>A chaque chapitre, tu commenceras toujours par le niveau 1 avec des exercices simples pour prendre confiance et mémoriser les règles. Une fois le niveau 1 complété, il passera sur le niveau 2, etc...</p>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>Plus tu en feras, plus tu comprendras et mémoriseras les règles. Plus tu en feras, plus tu réussiras, plus tu prendras confiance en toi et plus tu auras le plaisir d’en faire.Plus tu réussiras, plus tu gagneras de points. Plus tu passeras de niveaux, plus tu gagneras de points Bonus !</p>
                </Col>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '80%', marginTop: 50, marginBottom: 10 }} />
            </Row>

            {/* CRÉES TA WISHLIST */}

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Crée ta wishlist* !</h4>
            </Row>
            <Row style={{ backgroundImage: 'url(./backgroundwishlist.png)', backgroundPosition: 'center', alignItems: 'center' }}>
                <Col xs={12} style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>Pour te motiver, fixe-toi des objectifs, tes propres objectifs et souhaits concrets en créant ta wishlist*. Ce peut être une paire de baskets, un équipement sportif, un streetwear, un billet de concert, une carte de cinéma ou tout simplement un livre, une BD... toutes les petites ou grandes envies que tu aimerais t'offrir en travaillant sur MULMUG.Tu peux aussi décider d'offrir tes points à des organismes qui luttent pour des causes qui te tiennent à cœur...</p>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>Tes parent verront tous tes objectifs sur l'écran Wishlist* de l'application MULMUG sur leur smartphone. Commence à faire les exercices et montre tes efforts, ils accepteront peut-être d’abonder en points et ainsi tu pourras accéder à l’un de tes souhaits plus rapidement.</p>
                    <p style={{ fontSize: 10, color: '#1F8A9E', display: 'flex', justifyContent: 'flex-end' }}>* liste de souhaits.</p>
                </Col>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '80%', marginTop: 50, marginBottom: 10 }} />
            </Row>

            {/* LES POINTS */}

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Jusqu'à 12 600 points gagnés par chapitre complété*!</h4>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row' }}>
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>Gagnes des points!</p>
                    <img width="90%" src="./pointsexercice.png" alt='pointsexercice' />
                </Col>
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>A chaque exercice correctement fait, tu pourras gagner des points. Complète les 5 niveaux de chaque chapitre et tu pourras gagner un total de 450 points!</p>
                </Col>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '50%', marginTop: 20, marginBottom: 20, backgroundColor: "#FDC41F" }} />
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row' }}>
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>Des points BONUS:</p>
                    <img width="90%" src="./bonusniveau.png" alt='bonusniveau' />
                </Col>
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>A chaque fois que tu passeras de niveau, tu gagneras des points BONUS! Tu pourras gagner un total de 150 points de BONUS si tu passes les 5 niveaux!</p>
                </Col>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '50%', marginTop: 20, marginBottom: 20, backgroundColor: "#FDC41F" }} />
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row' }}>
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>Si tu es assidu et si tu montres ton travail et tes efforts, tes parents voudront peut-être te donner des points supplémentaires en abondant. Cela te permettra de gagner 20 fois plus de points à chaque exercice correctement fait et à chaque passage de niveau. Ainsi tu pourrais toucher du doigt l’un de tes souhaits plus rapidement.</p>
                </Col>
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ color: '#1F8A9E', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>Abondement des Parents!</p>
                    <img width="70%" src="./ptAbondParent.png" alt='ptAbondParent' />
                </Col>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '80%', marginTop: 50, marginBottom: 10 }} />
            </Row>

            {/* LES CAHIERS DE VACANCES */}

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Pour réviser pendant tes vacances, rien de mieux que des Cahiers de Vacances !</h4>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ borderRadius: 20 }}>
                        <CardImg top src="./cahierAutomne.png" alt="Card image cap" style={{ width: '30%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Cahier d'Automne</CardTitle>
                            <CardSubtitle tag="h7" className="mb-2 text-muted"></CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>100% des exercices sur les chapitres étudiés depuis la rentrée de Septembre.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ borderRadius: 20 }}>
                        <CardImg top src="./cahierNoel.png" alt="Card image cap" style={{ width: '30%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Cahier de Noël</CardTitle>
                            <CardSubtitle tag="h7" className="mb-2 text-muted"></CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>20% des exercices sur les chapitres étudiés jusqu'aux vacances de la Toussaint et 80% des exercices sur les chapitres étudiés depuis les vacances de la Toussaint jusqu'aux vacances de Noël.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ borderRadius: 20 }}>
                        <CardImg top src="./cahierHiver.png" alt="Card image cap" style={{ width: '30%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Cahier d'Hiver</CardTitle>
                            <CardSubtitle tag="h7" className="mb-2 text-muted"></CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>40% des exercices sur les chapitres étudiés jusqu'aux vacances de Noël et 60% des exercices sur les chapitres étudiés depuis les vacances de Noël jusqu'aux vacances d'hiver.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ borderRadius: 20 }}>
                        <CardImg top src="./cahierPrintemps.png" alt="Card image cap" style={{ width: '30%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Cahier de Printemps</CardTitle>
                            <CardSubtitle tag="h7" className="mb-2 text-muted"></CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>60% des exercices sur les chapitres étudiés jusqu'aux vacances de d'hiver et 40% des exercices sur les chapitres étudiés depuis les vacances d'hiver jusqu'aux vacances de Pâques.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ borderRadius: 20 }}>
                        <CardImg top src="./cahierEte.png" alt="Card image cap" style={{ width: '30%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Cahier d'Été</CardTitle>
                            <CardSubtitle tag="h7" className="mb-2 text-muted"></CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>Une révision complète sur tous les chapitres étudiés durant l'année scolaire.</CardText>
                            <Button style={{ display: 'flex', alignItems: 'flex-end' }}>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '80%', marginTop: 50, marginBottom: 10 }} />
            </Row>

            {/* LES PARTENAIRES */}

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Nos partenaires!</h4>
            </Row>
            <Row>
                <Col xs={6} md={3} style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: '50%', height: '90%' }} src="./logofnac.png" alt='mockup1' />
                </Col>
                <Col xs={6} md={3} style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ justifyContent: 'center', width: '60%', height: '50%' }} src="./logoamazon.png" alt='mockup1' />
                </Col>
                <Col xs={6} md={3} style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ justifyContent: 'center', width: '60%', height: '50%' }} src="./logocultura.png" alt='mockup1' />
                </Col>
                <Col xs={6} md={3} style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ justifyContent: 'center', width: '60%', height: '50%' }} src="./logodecathlon.png" alt='mockup1' />
                </Col>
                <Col xs={6} md={3} style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ justifyContent: 'center', width: '60%', height: '70%' }} src="./logogosport.png" alt='mockup1' />
                </Col>
                <Col xs={6} md={3} style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ justifyContent: 'center', width: '60%', height: '60%' }} src="./logodeezer.png" alt='mockup1' />
                </Col>
                <Col xs={6} md={3} style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ justifyContent: 'center', width: '60%', height: '50%' }} src="./logospotify.png" alt='mockup1' />
                </Col>
                <Col xs={6} md={3} style={{ marginBottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ justifyContent: 'center', width: '50%', height: '80%' }} src="./logocgrcinema.png" alt='mockup1' />
                </Col>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }}>Voir l'ensemble de nos partenaires</Button>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '80%', marginTop: 50, marginBottom: 10 }} />
            </Row>

            {/* LES AVIS */}

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Ce que les utilisateurs disent de Mulmug...</h4>
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ border: 'none', display: 'flex', alignItems: 'center' }}>
                        <CardImg top src="./MemojiGwenola.png" alt="Card image cap" style={{ width: '50%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Judith</CardTitle>
                            <CardSubtitle tag="h10" className="mb-2 text-muted">Élève de 6ème</CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>"C'est top! j'ai compris les fractions progressivement en faisant des exercices!"</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ border: 'none', display: 'flex', alignItems: 'center' }}>
                        <CardImg top src="./MemojiGeraldine.png" alt="Card image cap" style={{ width: '50%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Géraldine</CardTitle>
                            <CardSubtitle tag="h7" className="mb-2 text-muted">Maman d'une élève de 6ème</CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>"Ma fille est passée de 10 à 13 de moyenne en mathématiques grâce à l'application Mulmug, je recommande!"</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ border: 'none', display: 'flex', alignItems: 'center' }}>
                        <CardImg top src="./MemojiJMN.png" alt="Card image cap" style={{ width: '50%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>JMN</CardTitle>
                            <CardSubtitle tag="h7" className="mb-2 text-muted">Parent d'un élève de 6ème</CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>"Mulmug, une application géniale qui motive vraiment mon fils à travailler !"</CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row style={{ display: 'flex', justifyContent: 'center' }}>
                <Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }}>Voir l'ensemble des avis</Button>
            </Row>

            <Footer />

        </Container >

    )
}



export default StudentHomeScreen;