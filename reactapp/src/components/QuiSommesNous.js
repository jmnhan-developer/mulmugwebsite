import React from 'react'
import { Container, Row, Button, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';


import Header from './header.js'
import Footer from './footer.js'



function QuiSommesNous() {





    return (

        <Container>
            <Row>
                <Header />
            </Row>

            {/* QUI SOMMES NOUS? */}

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30, paddingLeft: 15, paddingRight: 15 }}>
                <h4 style={styleTitre}>Qui sommes nous?</h4>
                <p style={{ color: '#1F8A9E', textAlign: 'center', marginBottom: 10 }}>Créé en 2020, Mulmug est la première plateforme qui encourage, motive et récompense les élèves pour leur travail et leurs efforts. L'application propose gratuitement des exercices mathématiques par classe, par chapitre, par notion d'acquisition et par niveau de difficulté de 1 à 5. L'élève commencera toujours par des exercices simples (Niveau 1 et 2), afin de mémoriser les règles, de développer sa confiance en lui et le plaisir de la réussite puis passera sur des exercices de plus en plus subtils (Niveau 3, 4 et 5) pour le préparer aux situations et énoncés différents des contrôles et examens.</p>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '80%', marginTop: 10, marginBottom: 10 }} />
            </Row>

            {/* LES VALEURS */}

            <Row style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 50, marginBottom: 30, paddingLeft: 15, paddingRight: 15 }}>
                <h4 style={styleTitre}>Les valeurs qui nous animent et ce en quoi nous croyons…</h4>
                <Row style={{display:'flex', flexDirection:'row', justifyContent:'center', paddingLeft: 15, paddingRight: 15 }}>
                    <Col xs={12} md={5} style={{ margin: 5 }}>
                        <Row>
                            <h6 style={styleSousTitre}>Le travail et de l’effort.</h6>
                        </Row>
                        <p style={styleText}>Chez MULMUG, on pense que rien n’arrive tout seul et que si on ne travaille pas, si on ne fournit pas d’effort, rien n’arrivera. Au contraire, le travail et l’effort sont toujours récompensés.</p>

                    </Col>
                    <Col xs={12} md={5} style={{ margin: 5 }}>
                        <Row>
                            <h6 style={styleSousTitre}>Le dépassement de soi, ne jamais baisser les bras.</h6>
                        </Row>
                        <p style={styleText}>Nous sommes certains que chacun a une intelligence, une capacité, des ressources qui ne demandent qu’à être développées. MULMUG a été créé pour que plus personne ne puisse se dire "Je suis nul, je n’y arriverai jamais!".</p>

                    </Col>
                    <Col xs={12} md={5} style={{ margin: 5 }}>
                        <Row>
                            <h6 style={styleSousTitre}>La confiance et l'estime de soi.</h6>
                        </Row>
                        <p style={styleText}>Nous croyons que la confiance et l’estime de soi s’acquièrent grâce au cumul de multitudes de petites victoires qui se transforment en grandes victoires.</p>

                    </Col>
                    <Col xs={12} md={5} style={{ margin: 5 }}>
                        <Row>
                            <h6 style={styleSousTitre}>Donner du plaisir d’apprendre.</h6>
                        </Row>
                        <p style={styleText}>Apprendre n’est pas toujours un plaisir, en particulier lorsqu’on ne sait pas à quoi cela va nous servir mais on est convaincu qu’apprendre est primordial parce qu’il développe notre capacité de réflexion. Le plaisir doit venir d’ailleurs… des encouragements, des réussites, de bonnes notes, des récompenses…</p>

                    </Col>
                </Row>
            </Row>

            <Row style={{ display: 'flex', justifyContent: 'center' }} >
                <hr style={{ width: '80%', marginTop: 10, marginBottom: 10 }} />
            </Row>

            {/* EQUIPE ET CONTRIBUETRUS */}

            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30, paddingLeft: 15, paddingRight: 15 }}>
                <h4 style={styleTitre}>L'équipe MULMUG et les contributeurs…</h4>
                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                        <Card style={{ border: 'none', display: 'flex', alignItems: 'center' }}>
                            <CardImg top src="./MemojiJMN.png" alt="Card image cap" style={{ width: '50%' }} />
                            <CardBody>
                                <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Jean-Marc</CardTitle>
                                <CardSubtitle tag="h7" className="mb-2 text-muted">Fondateur</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                        <Card style={{ border: 'none', display: 'flex', alignItems: 'center' }}>
                            <CardImg top src="./MemojiGwenola.png" alt="Card image cap" style={{ width: '50%' }} />
                            <CardBody>
                                <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Axel</CardTitle>
                                <CardSubtitle tag="h10" className="mb-2 text-muted">Développeur</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={12} md={3} style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                        <Card style={{ border: 'none', display: 'flex', alignItems: 'center' }}>
                            <CardImg top src="./MemojiGeraldine.png" alt="Card image cap" style={{ width: '50%' }} />
                            <CardBody>
                                <CardTitle tag="h6" style={{ color: '#1F8A9E' }}>Céline</CardTitle>
                                <CardSubtitle tag="h7" className="mb-2 text-muted">Prof de Math.</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={2} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 15, paddingRight: 15   }}>
                        <img width='80%' src="./MemojiJMN.png" />
                    </Col>
                    <Col xs={12} md={10} >
                        <p style={styleText}>"Je suis Jean-Marc, fondateur de Mulmug. J’ai eu l’idée de créer Mulmug après avoir entendu une amie dire à son fils Eliott en vacances chez les grands parents « Si tu finis ton cahier de vacances avant la fin des vacances alors on participe à l’achat de ton iPhone » Eliott a appelé ses parents tous les 2 ou 3 jours pour dire qu’il a fait 3 pages, puis 5 pages de cahier de vacances…. Elliot a fini son cahier de vacances fin Août… Ainsi j’ai compris que, pour se motiver, un élève a besoin de se fixer des objecttifs, ses propres objectifs, personnels, concrets, motivants à ses yeux  et atteignables à court terme. Ces objectifs peuvent être un livre, une nouvelle paire de baskets ou tout simplement pouvoir aller faire du skateboard au skate parc…
                        Le nom Mulmug, presque l’acronyme « the More You Learn, the More You Get », littéralement « Plus tu apprends, plus tu gagnes », traduit tout le concept de l’application."</p>
                    </Col>
                </Row>
            </Row>





            <Footer />

        </Container>

    )
}

var styleTitre = {
    color: '#1F8A9E',
    textAlign: 'center',
    marginBottom: 30
};

var styleSousTitre = {
    color: '#1F8A9E',
    marginBottom: 10
};

var styleText = {
    color: '#1F8A9E',
    justifyContent: 'center',
    marginBottom: 10
};

export default QuiSommesNous;