import React from 'react'
import { Row, Col } from 'reactstrap';
import Header from './header.js'
import Footer from './footer.js'



function ReglesDeConfidentialite() {


    return (

        <div>

            <Header />

            <div style={{ marginLeft: 20, marginRight: 20 }}>


                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                        <h4 style={styleTitre}>RÉGLES DE CONFIDENTIALITÉ</h4>
                    </Col>
                </Row>

                {/* CONSENTEMENT DE L’UTILISATEUR */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>1. CONSENTEMENT DE L’UTILISATEUR</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Afin de bénéficier des services proposés par MULMUG sur son site internet et sur son Application, l’Utilisateur accepte pleinement et entièrement ces conditions et consent que certaines de ses données personnelles soient collectées</p>
                    </Col>
                </Row>

                {/* COLLECTE DES DONNEÉS PERSONNELLES */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>2. COLLECTE DES DONNEÉS PERSONNELLES</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>MULMUG recueille des informations personnelles de l’Utilisateur lors de la création d’un compte personnel de l’Utilisateur, lors de la commande d’un service MULMUG ainsi que lors de la navigation de l’Utilisateur sur son site internet et sur son Application.</p>
                    </Col>
                </Row>

                {/* LES DONNÉES COLLECTÉES */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>3. LES DONNÉES COLLECTÉES</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Les données collectées sont la civilité, le nom, le prénom, la classe (niveau d’étude), adresse e-mail de l’Utilisateur et de l’élève.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Les données personnelles des mineurs de moins de 15 ans ne peuvent être traitées par MULMUG qu’avec le consentement du parent ou d’une personne dépositaire de l’autorité parentale.</p>
                    </Col>
                </Row>

                {/* FINALITÉS DE LA COLLECTE DE DONNÉES PERSONNELLES */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>4. FINALITÉS DE LA COLLECTE DE DONNÉES PERSONNELLES</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Les finalités de la collecte des données personnelles de l’Utilisateur sont :</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- La création et la gestion du compte de l’Utilisateur</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- La gestion des commandes de services MULMUG par l’Utilisateur</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- La fourniture du ou des services adéquats et pertinents à l’Utilisateur</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10, paddingLeft: 10 }}>- La gestion des contentieux et des impayés entre MULMUG et l’Utilisateur</p>
                    </Col>
                </Row>

                {/* TRACEURS ET COOKIES */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>5. TRACEURS ET COOKIES</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur est informé que MULMUG utilise des traceurs et des cookies afin d’améliorer l’expérience utilisateur et de proposer des contenus correspondant à son profil sur son site internet et sur son Application.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Ces traceurs et/ou cookies sont déposés sur le navigateur de l’Utilisateur avec son consentement lorsqu’il poursuit sa navigation sur le site MULMUG ou sur l’application MULMUG. Ils sont stockés pour une période maximale de 12 mois. Une fois la période de 12 mois passée, un nouveau consentement sera à nouveau demandé à l’Utilisateur.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’Utilisateur est également informé que MULMUG utilise l’outil d’analyse Google Analytics afin de mesurer la performance de son site internet. A cet effet, un cookie sera également dépose sur le navigateur de l’Utilisateur.</p>
                    </Col>
                </Row>

                {/* DESTINATAIRES DES DONNÉES COLLECTÉES */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>6. DESTINATAIRES DES DONNÉES COLLECTÉES</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Seul MULMUG et certains salariés de MULMUG sont destinataires des données personnelles collectées sur l’Utilisateur. Celles-ci ne seront en aucun cas vendues. Elles ne seront pas transférées à un tiers sauf en cas de cession de tout ou partie de l’activité de MULMUG.</p>
                    </Col>
                </Row>

                {/* LES DONNÉES BANCAIRES */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>7. LES DONNÉES BANCAIRES</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Les transactions financières relatives au paiement via le site internet ou via l’Application sont confiées à un prestataire de services de paiement qui en assure le bon déroulement et la sécurité.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Pour les besoins des services, ce prestataire de services de paiement peut être amené à être destinataire de vos données à caractère personnel relatives à vos numéros de cartes bancaires, qu’il recueille et conserve en notre nom et pour notre compte.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>MULMUG n’a pas accès à ces données.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Les données relatives aux cartes bancaires sont conservées pendant le temps de l’inscription sur le site ou l’application et à tout le moins, jusqu’à la résiliation des services souscrits.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>En tout état de cause, les données relatives à celles-ci pourront être conservées, pour une finalité de preuve en cas d’éventuelle contestation de la transaction, en archives intermédiaires, pour la durée prévue par l’article L 133-24 du Code monétaire et financier, en l’occurrence 13 mois suivant la date de débit. Ce délai peut être étendu à 15 mois afin de prendre en compte la possibilité d’utilisation des cartes de paiement à débit différé.</p>
                    </Col>
                </Row>

                {/* DROIT D’ACCES, DE RECTIFICATION, D’OPPOSITION ET DE SUPPRESSION */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>8. DROIT D’ACCES, DE RECTIFICATION, D’OPPOSITION ET DE SUPPRESSION</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Conformément à la loi n ° 2004-801 du 6 août 2004 relative à la protection des personnes physiques à l'égard des traitements de données à caractère personnel et modifiant la loi n °78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, l’Utilisateur dispose d'un droit d'accès, de modification et de suppression des informations qui le concernent, et qu’il peut exercer à tout moment auprès de MULMUG par courriel à l’adresse e-mail suivante : contact@mulmug.com . Cette demande devra être accompagnée d’une copie d’une pièce d’identité conforme et valide de l’Utilisateur.</p>
                    </Col>
                </Row>

                {/* DROIT À LA PORTABILITÉ */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>9. DROIT À LA PORTABILITÉ</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>Le responsable du traitement des données personnelles de MULMUG remettra à l’Utilisateur qui en fait la demande, les données personnelles qu’il aura fournies sur le site et sur l’application, dans un format structuré, couramment utilisé et lisible par machine. </p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’utilisateur pourra également demander au responsable du traitement de MULMUG de transmettre directement ses données personnelles à un autre responsable du traitement sous réserve que la transmission soit techniquement possible.</p>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>L’exercice du droit à la portabilité devra être formulé par courriel à l’adresse e-mail suivante : contact@mulmug.com accompagnée d’une copie d’une pièce d’identité conforme et valide de l’Utilisateur.</p>
                    </Col>
                </Row>

                {/* SÉCURITÉ */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>10. SÉCURITÉ</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>MULMGU mettra tout en œuvre techniquement pour que les données personnelles de l’Utilisateur soient protégées et qu’elles ne soient ni déformées, ni endommagées, ni communiquées à des tiers non autorisés.</p>
                    </Col>
                </Row>

                {/* RÉCLAMATION */}
                <Row>
                    <Col xs={12} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 20 }}>
                        <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>11. RÉCLAMATION</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <p style={{ color: '#1F8A9E', marginBottom: 10 }}>En cas de réclamation, l’Utilisateur peut introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) : Commission Nationale de l'Informatique et des Libertés 3 Place de Fontenoy TSA 80715 - 75334 PARIS CEDEX 07 Tél : 01 53 73 22 22 Fax : 01 53 73 22 00 https://www.cnil.fr/fr/vous-souhaitez-contacter-la-cnil</p>
                    </Col>
                </Row>



                <Row style={{ display: 'flex', justifyContent: 'center' }} >
                    <hr style={{ width: '80%', marginTop: 10, marginBottom: 10 }} />
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

export default ReglesDeConfidentialite;