import React from 'react';
import { Container, Row, Button, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, } from 'reactstrap';
import { Link } from 'react-router-dom';


import Header from './header.js';
import Footer from './footer.js'



function HomeScreenParent() {


    return (

        <Container>
            <Row>
                <Header />
            </Row>

            {/* PRETS A APPRENDRE ET À GAGNER DES POINTS */}

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Prêt à encourager votre enfant à faire des exercices ?</h4>
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'row' }}>
                <Col xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img width="30%" src="./threed_mockup1.png" alt='mockup1' />
                </Col>
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>Téléchargez l’application et inscrivez votre enfant sur MULMUG pour l’encourager à faire des exercices des chapitres qu’il étudie en cours en ce moment !</p>
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
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'flex-start' }}>1. Je télécharge l’application Mulmug pour les parents sur mon smartphone et inscris mon enfant en 2 minutes.</p>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'flex-start' }}>2. Mon enfant télécharge l’application MULMUG sur son smartphone, finalise son inscription grâce aux identifiants provisoires que Mulmug lui aura envoyés. Il choisit les matières à travailler et commence à faire des exercices.</p>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'flex-start' }}>3. J'encourage mon enfant à faire des exercices en abondant en points à chaque exercice correctement fait.</p>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'flex-start' }}>4. Je suis ses progrès et ses acquis par matière tout en pilotant ses bons d'achat grâce à l'écran de pilotage de l'apliccation Mulmug Parent.</p>
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
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Une méthode progressive avec plus 100 milles exercices…</h4>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row' }}>
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p style={{ display: 'flex', width: 300, height: 70, backgroundColor: '#00AEBC', borderRadius: 10, textAlign: 'center', alignItems: 'center', color: 'white' }}>Suivi scrupuleux des Programmes officiels de l'Éducation Nationale.</p>
                    <p style={{ display: 'flex', width: 300, height: 70, backgroundColor: '#FFC700', borderRadius: 10, textAlign: 'center', alignItems: 'center', color: 'white' }}>100% développés par des professeurs encore en exercice.</p>
                    <p style={{ display: 'flex', width: 300, height: 70, backgroundColor: '#FF8300', borderRadius: 10, textAlign: 'center', alignItems: 'center', color: 'white' }}>Formats d'exercices variés et très ludiques.</p>
                </Col>
                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>Chaque matière est divisée par chapitre, par notion d’acquisition et par niveau de difficulté de 1 à 5.</p>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>chaque chapitre, l’élève commencera toujours par le niveau 1 avec des exercices simples pour prendre confiance en lui et mémoriser les règles. Une fois le niveau 1 complété, il passera sur le niveau 2 et une fois ce dernier complété, il passera au niveau 3, etc.</p>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>Plus il en fera, plus il comprendra et mémorisera les règles. Plus il en fera, plus il réussira, plus il prendra confiance en lui et plus il aura le plaisir d’en faire.Plus il réussira, plus il gagnera de points. Plus il passera de niveaux, plus il gagnera de points Bonus !</p>
                </Col>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '80%', marginTop: 50, marginBottom: 10 }} />
            </Row>

            {/* CRÉES TA WISHLIST */}

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Créer sa wishlist* !</h4>
            </Row>
            <Row style={{ backgroundImage: 'url(./backgroundwishlist.png)', backgroundPosition: 'center', alignItems: 'center' }}>
                <Col xs={12} style={{ display: 'flex', flexDirection: 'column' }}>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>Pour se motiver à travailler, votre enfant a besoin de se fixer des objectifs, ses propres objectifs et souhaits, concrets, personnels, motivants à ses yeux et à court terme en créant sa wishlist*, toutes ses petites ou grandes envies qu'il aimerait s'offrir en travaillant sur MULMUG. Ce peut être une paire de baskets, un équipement sportif, des streetwears, un billet de concert, une carte de cinéma ou toute simplement un livre, une BD... Il peut aussi décider d'offrir ses points à des organismes qui luttent pour des causes qui lui tiennent à cœur...</p>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>En tant que parent, vous pouvez voir ses objectifs sur l'écran "Wishlist" de l'application Mulmug directement sur votre smartphone. Vous pouvez l'encourager à faire des exercices en abondant en points, cela lui permettra d'accéder plus rapidement à l'un de ses souhaits.</p>
                    <p style={{ fontSize: 10, color: '#1F8A9E', display: 'flex', justifyContent: 'flex-end' }}>* liste de souhaits.</p>
                </Col>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '80%', marginTop: 50, marginBottom: 10 }} />
            </Row>

            {/* LES POINTS */}

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Encouragez votre enfant pour son travail et ses efforts !</h4>
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Col xs={12}>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>Vous pouvez l'encourager dans ses efforts en le récompensant avec vos propres points grâce à l'abondement. Ainsi il recevra 20 FOIS PLUS de points à chaque exercice correctement fait et 20 FOIS PLUS de points BONUS à chaque niveau complété.</p>
                </Col>
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img width="60%" src="./ptAbondParent.png" alt='ptAbondParent' />
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Col xs={12}>
                    <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>Plus rapidement il accédera à l'un des souhaits de sa wishlist*, plus il aura envie de faire d'autres exercices ! En plus, il aura le plaisir et la fierté de s'offrir l'un de ses souhaits grâce à son travail et ses efforts. ;-)</p>
                    <p style={{ fontSize: 10, color: '#1F8A9E', display: 'flex', justifyContent: 'flex-end' }}>* liste de souhaits.</p>
                </Col>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:20, marginBottom:20 }}>
            <Link to="/Mulmugplusabond" style={{ textDecorationLine: 'none' }}><Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50, width: 200 }}>J'abonde</Button></Link>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '80%', marginTop: 50, marginBottom: 10 }} />
            </Row>

            {/* LES CAHIERS DE VACANCES */}

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Pour revoir les notions pendant ses vacances, rien de mieux que des Cahiers de Vacances !</h4>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
                <Col xs={12}>
                <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>Pour chaque cahier de vacances, Mulmug sélectionnera et lui proposera de manière aléatoire 3 exercices par jour dans les chapitres que ton enfant aura déjà commencé à étudier sur Mulmug. C’est un super moyen pour faire une révision complète des chapitres déjà étudiés.</p>
                <p style={{ color: '#1F8A9E', display: 'flex', justifyContent: 'center' }}>5 cahiers de vacances sont disponibles, un pour chaque vacances.</p>
                </Col>
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Col xs={12} md={4} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ borderRadius: 20 }}>
                        <CardImg top src="./cahierAutomne.png" alt="Card image cap" style={{ width: '30%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Cahier d'Automne</CardTitle>
                            <CardSubtitle tag="h7" className="mb-2 text-muted"></CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>100% des exercices sur les chapitres étudiés depuis la rentrée de Septembre.</CardText>
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
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:20, marginBottom:20 }}>
            <Link to="/Mulmugpluscahiers" style={{ textDecorationLine: 'none' }}><Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50, width: 300 }}>Je choisis un cahier de vacances</Button></Link>
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
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>"C'est top! j'ai compris les fractions progressivement en faisant des exercices."</CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                    <Card style={{ border: 'none', display: 'flex', alignItems: 'center' }}>
                        <CardImg top src="./MemojiGeraldine.png" alt="Card image cap" style={{ width: '50%' }} />
                        <CardBody>
                            <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Géraldine</CardTitle>
                            <CardSubtitle tag="h7" className="mb-2 text-muted">Maman d'une élève de 6ème</CardSubtitle>
                            <CardText style={{ color: '#1F8A9E', fontSize: 13 }}>"Ma fille est passée de 10 à 13 de moyenne en mathématiques grâce à l'application Mulmug, je recommande !"</CardText>
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
            <Row style={{ display: 'flex', justifyContent: 'center', marginBottom:30 }}>
                <Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }}>Voir l'ensemble des avis</Button>
            </Row>

            <Footer />

        </Container >

    )
}



export default HomeScreenParent;