import React from 'react'
import { Row, Col } from 'reactstrap';



import Header from './header.js'
import Footer from './footer.js'



function CgvCgu() {


    return (

        <div>

            <Header />

            <div style={{ marginLeft: 20, marginRight: 20 }}>

                {/* CGV CGU */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                        <h4 style={styleTitre}>CONDITIONS GÉNÉRALES DE VENTE ET CONDITIONS GÉNÉRALES D’UTILISATION</h4>
                    </Col>
                </Row>

                {/* PREAMBULE */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>PRÉAMBULE</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Les présentes conditions générales de vente (CGV) et conditions générales d’utilisation (CGU), mises à jour le 01 Février 2021, sont établies par MULMUG dans le cadre de son offre de service sur son site internet et sur son application à destination des élèves du collège et du lycée et également à destination des parents.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Les présentes conditions générales de vente (CGV) et conditions générales d’utilisation (CGU) sont conclues entre :</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>D’une part</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La société MULMUG SAS, société par actions simplifiée de droit français, immatriculée au Registre du commerce et des sociétés de Nanterre, sous le numéro R.C.S 848 614 293 dont le siège social est situé 14, Rue de Solférino – 92100 BOULOGNE-BILLANCOURT et représentée par Monsieur Jean-Marc NHAN en sa qualité de Président.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>ci-après dénommée « MULMUG»</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>Et d’autre part</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La personne physique majeure (ayant au moins 18 ans) ayant la capacité juridique de contracter par elle-même ou par l’intermédiaire d’une personne dépositaire de l’autorité parentale et souhaitant utiliser les services proposés par le site https://www.mulmug.com et par l’application MULMUG.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>ci-après dénommée « l’Utilisateur »</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Ensemble dénommées « Les parties »</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Ces présentes conditions générales de vente et d’utilisations peuvent être modifiées totalement ou actualisées partiellement à tout moment par MULMUG, sans préavis et sans communication, notamment pour les mettre en conformité avec les dispositions légales et réglementaires. Les nouvelles conditions générales de vente et conditions générales d’utilisation prennent effet à partir de la date de leur publication sur le site internet MULMUG et sur l’application MULMUG. Il appartient à l'Utilisateur de s’informer régulièrement des actualisations de ces conditions. La poursuite de l’utilisation des services MULMUG après la publication de ces nouvelles conditions vaut acception de celles-ci.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Pour chaque commande, les conditions générales de vente et d’utilisation qui s’appliquent sont celles en vigueur le jour de la validation de la commande par l’utilisateur.</p>
                    </Col>
                </Row>

                {/* DEFINITIONS */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>1. DÉFINITIONS</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>« Site Internet » désigne le site internet de MULMUG accessible à l’adresse internet suivante: https://www.mulmug.com.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>« Application » mentionnée dans ces présentes conditions désigne l’application gratuite de MULMUG, qui peut être téléchargée sur les stores App Store et Google Play.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>« Utilisateur » désigne la personne physique qui utilise ou qui souhaite utiliser les services proposés par MULMUG à titre privé, à des fins non commerciales et en dehors de toute activité professionnelle.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>« Élève » désigne la personne physique justifiant d’une inscription dans l’un des collèges ou l’un des lycées situés sur le territoire français métropolitain, sur les DOM et sur les TOM.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>« Offres de services » désignent l’ensemble des services gratuits et payants proposés par MULMUG sur son site internet https://www.mulmug.com et sur son Application.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>« Point » et « Points » désignent la récompense qu’un élève obtient en effectuant correctement un ou des exercices. Le nombre de points par exercice varie en fonction de la complexité des exercices et du niveau auquel appartient l’exercice. Le cumul des points permettra à l’élève d’obtenir un bon d’achat dans les enseignes partenaires de MULMUG. Pour un même nombre de points, la valeur du bon d’achat peut varier selon l’enseigne.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>« Points Bonus » désignent la récompense qu’un élève obtient en faisant correctement l’ensemble des exercices d’un niveau. Le nombre de Points Bonus diffère en fonction du niveau.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>« Abondement » désigne le contrat conclu entre l’Utilisateur et MULMUG permettant l’Utilisateur de récompenser, par ses propres points, l’élève qui lui est rattaché sur son compte MULMUG et autorisant MULMUG à gérer ce service pour le compte de l’Utilisateur.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>« Abonnement » désigne le contrat conclu entre l’Utilisateur et MULMUG permettant l’élève qui lui est rattaché sur son compte MULMUG d’utiliser les services proposés sur l’application MULMUG sans publicités.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>« Cahier de vacances » désigne le contrat conclu entre l’Utilisateur et MULMUG permettant l’élève qui lui est rattaché sur son compte MULMUG d’accéder aux exercices du cahier de vacances spécifié dans le contrat.</p>
                    </Col>
                </Row>

                {/* OBJET */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>2. OBJET</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Les présentes conditions générales de vente et conditions générales d’utilisation définissent et régissent l’ensemble des droits et obligations entre l’Utilisateur et MULMUG et l’ensemble des services gratuits et payants proposés par le site internet https://www.mulmug.com et par l’application MULMUG.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur du site internet https://www.mulmug.com et de l’application MULMUG reconnaissent, préalablement et de manière expresse, avoir pris connaissance et avoir accepté les présentes conditions générales.</p>

                    </Col>
                </Row>

                {/* ACCÈS ET MODALITÉS */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>3. ACCÈS ET MODALITÉS D'UTILISATION DES SERVICES MULMUG </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>3.1 Conditions d'utilisation</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Pour accéder au site internet et à l’application MULMUG, l’utilisateur doit disposer d’un terminal personnel (ordinateur, tablette ou téléphone mobile) disposant d’une configuration suffisante compatible avec celle requise pour l’utilisation du site internet et de l’application MULMUG et d’une connexion à internet haut débit suffisante. Les frais d’acquisition des terminaux et d’abonnement à un opérateur à internet haut débit sont exclusivement à la charge de l’Utilisateur.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>MULMUG ne pourra être tenu responsable de l’impossibilité d’accéder au site internet et à l’application MULMUG liée à une configuration d’un terminal personnel incompatible avec celle requise pour l’utilisation du site et de l’Application MULMUG ou à une connexion internet ou mobile insuffisante.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur est pleinement et entièrement responsable de l’utilisation du site internet et de l’application MULMUG.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>MULMUG mettra tout en œuvre pour que l’Utilisateur puisse accéder au site internet et à l’application 24 heures sur 24 et 7 jours sur 7, sauf cas de force majeure ou d’un évènement indépendamment de la volonté de MULMUG et sous réserve de pannes ou de maintenance nécessaire au bon fonctionnement de son site internet et de son application. Par conséquent, la responsabilité de MULMUG ne pourra pas engagée en cas d’impossibilité d’accès à son site internet ou à son application.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>3.2 Accès au site internet  https://www.mulmug.com et à l’Application MULMUG</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’accès au contenu d’information du site internet MULMUG est libre et ne requiert aucune inscription. En revanche, l’utilisation de l’application MULMUG requiert une inscription de l’Utilisateur et de l’élève.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Toute demande de souscription d’Abondement, d’Abonnement et de Cahier de Vacances requiert un compte Utilisateur qui devra être créé préalablement par l’Utilisateur.</p>

                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>3.3 Création de compte et identification</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Pour créer un compte, l’Utilisateur devra remplir le formulaire d’inscription mis à disposition par MULMUG sur son site internet et sur son Application. L’Utilisateur devra fournir en particulier son adresse e-mail et créer un mot de passe personnel qui serviront d’identifiants pour accéder aux services réservés aux Utilisateurs de MULMUG.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur s’engage à toujours mettre à jour ses informations personnelles inscrites sur son profil pendant toute la durée du contrat d’Abondement, d’Abonnement ou de Cahier de vacances.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La responsabilité de MULMUG ne pourra pas être engagé si les informations personnelles fournies par l’Utilisateur sont erronées.</p>
                    </Col>
                </Row>

                {/* ABONDEMENT */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>4. ABONDEMENT</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur qui souhaite encourager l’élève, qui lui rattaché sur son compte MULMUG, à faire plus d’exercice et le récompenser pour son travail, son effort peut lui donner des points supplémentaires en souscrivant à l’une des offres d’Abondement proposées par MULMUG.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La souscription d’une offre d’Abondement par l’Utilisateur permet à l’élève, qui lui est rattaché sur son compte MULMUG, de bénéficier de 20 fois plus de points par exercice correctement fait et 20 fois plus de point Bonus par niveau complété que celui ou ceux donnés par MULMUG.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’intégralité des points d’Abondement inscrits sur le compte de l’Utilisateur lors de la prise de commande sera versée à l’élève au fur et à mesure des exercices correctement faits et ce jusqu’à l’épuisement des points.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Dans le cas où le nombre de points d’Abondement restants est inférieur à celui qui doit être attribué à l’élève pour un exercice donné et un niveau donné, ces points ne seront pas attribués à l’élève et resteront sur le compte de l’Utilisateur.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>4.1 Durée de validité de l’Abondement</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Abondement est activé dès la validation définitive du paiement de la commande. Le compte de l’Utilisateur est crédité du nombre de points Abondement correspondant à l’offre commandée. Un e-mail de validation de la commande accompagné de la facture est envoyé à l’Utilisateur.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Les points Abondement seront crédités sur le compte de l’élève au fur et à mesure des exercices correctement faits ou des niveaux complétés jusqu’à l’épuisement des points.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Abondement est sans limite de durée et reste valide tant qu’il reste des points sur le compte de l’Utilisateur. L’Abondement prendra fin à l’épuisement des points.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>4.2 Renouvellement de l’Abondement</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Lorsqu’un Abondement souscrit par l’Utilisateur prend fin, celui ne sera pas renouvelée automatiquement par tacite reconduction. L’Utilisateur qui souhaite continuer d’encourager l’élève doit commander et valider une nouvelle offre d’Abondement. Celle-ci sera facturée sur la base tarifaire en vigueur le jour de la validation de l’Abondement.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>4.3 Demande de remboursement</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>À tout moment, l’Utilisateur peut consulter le nombre de points Abondement restant à attribuer à l’élève.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur peut mettre fin à l’Abondement et demander le remboursement en euro des points restants sur simple demande en accédant à sa page de profil sur le site internet de MULMUG.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Toute demande de remboursement d’Abondement contracté sur l’Application engendre des frais qui correspondent à 30% du montant payé au moment de la validation de la souscription.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Toute demande de remboursement d’Abondement contracté sur le site internet engendrera des frais qui correspondent à 20% du montant payé au moment de la validation de la souscription.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La demande de remboursement sera effective le jour ouvré suivant la réception de la demande grâce au formulaire prévu sur le site internet. Une confirmation par mail de la demande de remboursement est envoyée à l’Utilisateur détaillant les frais retenus et le montant du remboursement.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Le remboursement sera effectué dans les 14 jours calendaires ouvrables suivant la date de réception de la demande rétractation.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur pourra, à tout moment, commander à nouveau un Abondement selon les conditions décrites par les présentes conditions générales.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}></p>
                    </Col>
                </Row>

                {/* ABONNEMENT SANS PUBLICITÉ */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>5. ABONNEMENT SANS PUBLICITÉ</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La publicité des annonceurs et les communications de nos enseignes partenaires permettent MULMUG de rémunérer ses collaborateurs et ses contributeurs, de développer de nouveaux exercices et rendre l’Application MULMUG accessible gratuitement à tous les élèves.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur qui souhaite que l’élève travaille sans voir de publicités des annonceurs, ni les communications de nos enseignes partenaires pourra souscrire un Abonnement sans publicité.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Abonnement pourra être mensuel sans engagement ou annuel avec un engagement sur 12 mois de la part de l’Utilisateur.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>5.1 Durée de validité de l’Abonnement sans publicité</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Dans le cas de l’Abonnement mensuel, l’Abonnement prend effet à la date de la validation définitive de la commande confirmée par un e-mail MULMUG qui détaille les caractéristiques de la commande et prend fin la même date le mois suivant.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Dans le cas de l’Abonnement annuel, l’Abonnement prend effet à la date de la validation définitive de la commande confirmée par un e-mail MULMUG qui détaille les caractéristiques de la commande et prend fin la même date, le même mois l’année suivante.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur pourra à tout moment consulter les informations de l’Abonnement commandé et validé, notamment la date d’échéance de celui-ci. Ces informations sont disponibles sur la page Pilotage du site internet de MULMUG et de l’Application.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>5.2 Renouvellement de l’Abonnement sans publicité</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Le renouvellement de l’abonnement sans publicité arrivant à échéance est fait de manière automatique et facturé à l’Utilisateur sur la base tarifaire en vigueur lors du renouvellement.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>5.3 Résiliation d’un Abonnement sans publicité</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur ayant contracté un abonnement sans publicité pourra résilier son abonnement sans publicité sous réserve de respecter un préavis de 24H avant la date d’échéance de son abonnement.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La résiliation de l’abonnement devra être effectuée sur le site internet MULMUG via un formulaire de demande de résiliation prévu à cet effet.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La résiliation sera effective à la date d’échéance de l’abonnement.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur pourra à tout moment souscrire à nouveau à un abonnement sans publicité.</p>
                    </Col>
                </Row>

                {/* CAHIERS DE VACANCES */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>6. CAHIERS DE VACANCES</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Pour les périodes de vacances scolaires, l’Utilisateur pourra commander un cahier de vacances pour l’élève qui est rattaché à son compte MULMUG.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Il existe 5 cahiers de vacances :</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- Cahier de vacances de la Toussaint</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- Cahier de vacances de Noël</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- Cahier de vacances d’Hiver</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- Cahier de vacances de Pâques</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- Cahier de vacances d'Été</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’élève qui bénéficie d’un cahier de vacances se verra proposé, par jour, 3 exercices sélectionnés de manière aléatoire dans les chapitres qu’il aura déjà commencé à travailler sur l’Application MULMUG et à partir des niveaux que l’élève aura déjà acquis sur MULMUG. Ainsi l’élève pourra faire une révision complète des différentes notions déjà travaillées en classe et sur l’Application MULMUG.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Il appartient à l’Utilisateur de vérifier que les chapitres déjà travaillés par l’élève en classe soient activés sur l’Application MULMUG. L’activation d’un chapitre sur l’Application MULMUG se fait par l’élève en faisant au moins un exercice dans le chapitre qu’il souhaite activer. Cette action est nécessaire pour que MULMUG puisse proposer en révision les exercices de tous les chapitres que l’élève souhaite revoir ou que l’Utilisateur souhaite que l’élève revoie.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Les exercices de révision dans les cahiers de vacances permettent à l’élève de continuer de recevoir des points MULMUG et des points Abondement s’il bénéficie d’un contrat d’Abondement.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>6.1 Durée de validité d’un cahier de vacances</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’utilisateur peut commander et valider un cahier de vacances à tout moment. Celui-ci sera disponible dès le premier jour des vacances scolaires selon les dates de vacances scolaires des académies.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La durée de validité des cahiers de vacances correspond au nombre de jours de vacances scolaires de l’élève et a pour date d’échéance la veille de la reprise des classes à minuit.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>6.2 Renouvellement</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Le cahier de vacance qui arrive à échéance ne font pas l’objet de renouvellement automatique.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Lorsque le cahier de vacances contracté prend fin. L’utilisateur pourra à tout moment commander et valider le cahier des vacances scolaires suivant.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>6.3 Résiliation et remboursement d’un cahier de vacances</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Le cahier de vacances déjà commencé, c’est-à-dire au moins un exercice fait par l’élève, ne pourra pas être résilié.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Le cahier de vacances qui n’aura pas été commencé, c’est-à-dire aucun exercice fait par l’élève, pourra être résilié par l’utilisateur avec un préavis de 24H avant la date d’échéance. </p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La résiliation devra être faite par écrit sur le site internet MULMUG grâce au formulaire prévu à cet effet.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Pour la résiliation d’un cahier de vacances contracté sur l’application MULMUG, des frais de résiliation correspondant à 30% du montant total payé par l’Utilisateur seront appliqués.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Pour la résiliation d’un cahier de vacances contracté sur le site internet, des frais de résiliation correspondant à 20% du montant total payé par l’Utilisateur seront appliqués.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La résiliation sera prise en compte le jour ouvré suivant la réception de la demande de résiliation. Un mail de confirmation de résiliation sera envoyé à l’utilisation pour confirmer la résiliation et reprends les détails du remboursement.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Le remboursement sera effectué par MULMUG par virement sur le compte de la carte bancaire qui aura servi lors de la commande du cahier de vacances. Celui-ci interviendra au plus tard dans les 14 jours suivants la date de validation de la demande de résiliation par MULMUG.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Sauf preuve contraire, toutes les informations enregistrées par MULMUG sur le compte de l’Utilisateur, dans des conditions normales de sécurité, constituent la preuve des éléments relatifs aux commandes effectuées par l’Utilisateur, notamment leurs natures, leurs contenus, leurs prix et leurs dates.</p>
                    </Col>
                </Row>

                {/* PRIX */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>7. PRIX</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Tous les prix annoncés par MULMUG sur son site internet et sur son Application sont en euros toutes taxes comprises (TTC). Les prix comprennent la taxe à la valeur ajoutée (TVA) au taux en vigueur au jour de la commande par l’Utilisateur.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>MULMUG se réserve le droit de modifier ses prix à tout moment sans préavis notamment pour répercuter les taxes et contributions nouvellement créées ou modifiées, à la hausse comme à la baisse.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Les prix facturés et payés par l’Utilisateur sont ceux en vigueur le jour de le validation définitive de la commande par l’Utilisateur.</p>
                    </Col>
                </Row>

                {/* PAIEMENT */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>8. PAIEMENT</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Pout toute commande, la somme totale (TTC) à payer est affichée sur l’écran de la validation définitive de la commande par l’Utilisateur et sur le mail de confirmation envoyé par MULMUG à l’Utilisateur.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Le paiement s’effectue uniquement par carte bancaire (carte Bleue, carte Visa, carte Mastercard).</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>MULMUG se réserve le droit de suspendre immédiatement l’exécution de la commande si son paiement est refusé par la banque de l’Utilisateur. La commande pourra être exécutée lorsque le prix de la commande sera entièrement payé par l’Utilisateur.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>MULMUG se réserve le droit de refuser et d’annuler toute commande d’un Utilisateur avec lequel il existerait un litige non encore résolu pour une commande antérieure.</p>
                    </Col>
                </Row>

                {/* RÉTRACTATION */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>9. RÉTRACTATION</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur dispose d’un droit de rétractation pour toutes les commandes effectuées et validées sur MULMUG durant un délai de 14 jours calendaires ouvrables à compter de la date de validation de la commande.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur qui souhaite exercer son droit de rétractation devra faire une demande de résiliation auprès de MULMUG via le formulaire prévu à cet effet dans les conditions relatives aux services décrites dans ces présentes conditions.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La résiliation entrainera le terme immédiat du service MULMUG sur son site internet et sur son Application.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Le remboursement se fera par virement bancaire sur le compte de la carte bancaire utilisée pour la souscription de l’offre sur MULMUG. Celui-ci sera effectué selon les conditions de résiliation relatives à l’offre dans les 14 jours calendaires ouvrables suivant la date de réception de la demande de rétractation.</p>
                    </Col>
                </Row>

                {/* GARANTIE ET RESPONSABIITÉ */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>9. GARANTIE ET RESPONSABIITÉ</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La responsabilité de MULMUG ne pourra pas être engagée en cas d’inexécution ou de mauvaise exécution d’un contrat :</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- soit au fait de l’Utilisateur,</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- soit à un fait insurmontable et imprévisible de tout autre tiers au contrat,</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- soit à un cas de force majeure tel que définie par la règlementation et la jurisprudence françaises.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La responsabilité de MULMUG ne pourra pas être engagée en cas de dommages matériels ou immatériels, directs ou indirects qui pourraient être liés à l’exécution des services MULMUG.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>La responsabilité de MULMUG ne pourra pas être engagée en cas d’inexécution ou de la mauvaise exécution résultant des limites et des contraintes des réseaux internet ou mobile personnels. Il appartient à l’Utilisateur de vérifier que les caractéristiques et la qualité de son réseau internet et mobile personnel correspondent à celles requises pour la bonne utilisation des services MULMUG.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur ne pourra tenir MULMUG pour responsable des dommages causés par des virus informatiques et des intrusions extérieures. Il incombe à l’Utilisateur de vérifier que son équipement soit efficacement protégé.</p>
                    </Col>
                </Row>

                {/* PROTECTION DES DONNÉES PERSONNELLES */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>10. PROTECTION DES DONNÉES PERSONNELLES</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Les informations communiquées par l’Utilisateur et collectées par MULMUG lors des inscriptions et souscriptions de services proposés par MULUG sont nécessaires au traitement et suivi des souscriptions des services et au suivi marketing et commercial de l’Utilisateur.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>MULMUG s’engage :</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- à respecter la vie privée de l’Utilisateur,</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- à assurer la sécurité et la confidentialité des données communiquées par l’Utilisateur par tous les moyens mis à sa disposition,</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- à ne pas divulguer les informations confidentielles qui lui sont communiquées par l’Utilisateur.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Conformément à la loi n ° 2004-801 du 6 août 2004 relative à la protection des personnes physiques à l'égard des traitements de données à caractère personnel et modifiant la loi n °78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, l’Utilisateur dispose d'un droit d'accès, de modification et de suppression des informations qui le concernent, et qu’il peut exercer à tout moment auprès de MULMUG par courrier à l’adresse mail suivante : contact@mulmug.com.</p>
                    </Col>
                </Row>

                {/* PROTECTION DE LA PROPRIÉTÉ INTELLECTUELLE */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>11. PROTECTION DE LA PROPRIÉTÉ INTELLECTUELLE</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Tous les éléments textes, images, illustrations, vidéos, sons… reproduits sur le site internet MULMUG et sur l’Application MULMUG sont protégés au titre du droit d’auteur et au titre du droit des dessins et modèles par leurs titulaires. A ce titre, seule une utilisation privée et familiale est autorisée. </p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Il est strictement interdit de reproduire, même partiellement, le site internet et l’Application MULMUG. Seule une utilisation du site internet et de l’Application MULMUG conforme à sa destination est autorisée.</p>
                    </Col>
                </Row>

                {/* INTÉGRALITÉ DES CONDITIONS GÉNÉRALES DE VENTE ET D’UTILISATION */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>12. INTÉGRALITÉ DES CONDITIONS GÉNÉRALES DE VENTE ET D’UTILISATION</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Dans l’hypothèse ou un changement de législation ou une décision de justice rendraient l’une des clauses des présentes conditions générales illégales ou inopposables, seule ladite clause pourrait être déclarée nulle et inopposable. Les autres clauses des présentes conditions générales resteront valides.</p>
                    </Col>
                </Row>

                {/* NON RENONCIATION */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>13. NON RENONCIATION</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>MULMUG se réserve le droit de ne pas appliquer l’une des clauses des présentes conditions générales. La non-application de l’une de ces clauses par MULMUG ne vaut pas renonciation de sa part à s’en prévaloir à tout moment et n’invalide pas tout ou partie de ces conditions générales de vente et d’utilisation.</p>
                    </Col>
                </Row>

                {/*  DROIT APPLICABLE ET LITIGES  */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>14. DROIT APPLICABLE ET LITIGES </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Les présentes conditions générales de ventes et d’usage et les rapports contractuels entre les parties sont soumis à la législation française.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>En cas de litige, MULMUG et l’Utilisateur, s’engagent à trouver une solution amiable dans l’intérêt de chacune des parties. Si une action juridique doit être engagée par l’une des parties, seuls les tribunaux français seront compétents. </p>
                    </Col>
                </Row>
            </div>

            <Footer />

        </div>

    )
}

var styleTitre = {
    color: '#1F8A9E',
    textAlign: 'center',
    marginBottom: 30
};

export default CgvCgu;