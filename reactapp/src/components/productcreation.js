import React, { useState } from 'react'
import { Row, Button, Col, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux'



function ProductCreation(props) {

    const [category, setCategory] = useState('')
    const [commercialName, setCommercialName] = useState('')
    const [commitment, setCommitment] = useState('')
    const [nbrPoints, setNbrPoints] = useState('')
    const [period, setPeriod] = useState('')
    const [discipline, setDiscipline] = useState('')
    const [grade, setGrade] = useState('')
    const [priceHT, setPriceHT] = useState('')
    const [rateTVA, setRateTVA] = useState('')
    const [priceTTC, setPriceTTC] = useState('')
    const [durationDays, setDurationDays] = useState('')
    const [beginingDate, setBeginingDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const [productExists, setProductExists] = useState(false)
    const [listErrorsProductCreation, setErrorsProductCreation] = useState([])
    const [listSuccessProductCreation, setSuccessProductCreation] = useState([])


    // ENVOI DES DONNÉES PRODUITS EN CRÉATION DANS LE BACK
    var handleSubmitProductCreation = async () => {

        const data = await fetch('/products/productcreation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `categoryFromFront=${category}&commercialNameFromFront=${commercialName}&commitmentFromFront=${commitment}&nbrPointsFromFront=${nbrPoints}&periodFromFront=${period}&disciplineFromFront=${discipline}&gradeFromFront=${grade}&priceHTFromFront=${priceHT}&rateTVAFromFront=${rateTVA}&priceTTCFromFront=${priceTTC}&durationDaysFromFront=${durationDays}&beginingDateFromFront=${beginingDate}&endDateFromFront=${endDate}`
        })

        const body = await data.json()

        if (body.result === true) {
            setProductExists(true)
            setCategory ('')
            setCommercialName ('')
            setCommitment ('')
            setNbrPoints ('')
            setPeriod ('')
            setDiscipline ('')
            setGrade ('')
            setPriceHT ('')
            setRateTVA ('')
            setPriceTTC ('')
            setDurationDays ('')
            setBeginingDate ('')
            setEndDate ('')
            setSuccessProductCreation (body.success)
            setErrorsProductCreation ([])
        } else {
            setErrorsProductCreation(body.error)
        }
    }

    // if (productExists) {
    //     return <Redirect to='/homeadminscreen' />
    // }

    var tabErrorsProductCreation = listErrorsProductCreation.map((error, i) => {
        return (<p style={{ color: 'red' }}>{error}</p>)
    })
    var tabSuccessProductCreation = listSuccessProductCreation.map((success, i) => {
        return (<p style={{ color: 'green' }}>{success}</p>)
    })


    return (

        <div style={{ marginTop: 20 }}>

            <Row style={{ display: 'flex', flexDirection: 'row', border: '1px solid #D5DBDB', borderRadius: 10, paddingRight: 15, paddingLeft: 15, paddingTop: 30, paddingBottom: 30 }}>

                <Col xs={12} md={6}>

                    {/*CREATION D'UN PRODUIT */}

                    <p style={{ color: '#1F8A9E', fontWeight: 'bold', textAlign: 'center' }}>CRÉER UN NOUVEAU PRODUIT</p>

                    <Row form style={{ display: 'flex', flexDirection: 'column' }}>
                        <FormGroup>
                            <Input type="select" name="category" id="category" placeholder="Catégorie" style={styleInputClasse} value={category} onChange={(e) => setCategory(e.target.value)} >
                                <option disable>Catégorie de produit</option>
                                <option>Abondement en points</option>
                                <option>Forfait sans Pub</option>
                                <option>Cahier de Vacances</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="commercialName" id="CommercialName" placeholder="Nom commercial sur facture..." style={styleInput} value={commercialName} onChange={(e) => setCommercialName(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="commitment" id="commitment" placeholder="Engagement" style={styleInput} value={commitment} onChange={(e) => setCommitment(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="number" name="nbrPoints" id="nbrPoints" placeholder="Nombre de points" style={styleInput} value={nbrPoints} onChange={(e) => setNbrPoints(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" name="category" id="category" placeholder="Période" style={styleInputClasse} value={period} onChange={(e) => setPeriod(e.target.value)} >
                                <option disable>Période</option>
                                <option>Toussaint</option>
                                <option>Noël</option>
                                <option>Hiver</option>
                                <option>Pâques</option>
                                <option>Automne</option>
                                <option>Hiver</option>
                                <option>Printemps</option>
                                <option>Eté</option>
                                <option>1er Trimestre</option>
                                <option>2ème Trimestre</option>
                                <option>3ème Trimestre</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" name="category" id="category" placeholder="Matière" style={styleInputClasse} value={discipline} onChange={(e) => setDiscipline(e.target.value)} >
                                <option disable>Matière</option>
                                <option>Mathématiques</option>
                                <option>Physique</option>
                                <option>SVT</option>
                                <option>Français</option>
                                <option>Anglais</option>
                                <option>Espagnol</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type="select" name="category" id="category" placeholder="Catégorie" style={styleInputClasse} value={grade} onChange={(e) => setGrade(e.target.value)} >
                                <option disable>Classe</option>
                                <option>6ème</option>
                                <option>5ème</option>
                                <option>4ème</option>
                                <option>3ème</option>
                                <option>2nde</option>
                                <option>1ère</option>
                                <option>Terminale</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="priceHT" id="priceHT" placeholder="Prix HT en €" style={styleInput} value={priceHT} onChange={(e) => setPriceHT(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="rateTVA" id="rateTVA" placeholder="Taux de TVA en nombre décimal" style={styleInput} value={rateTVA} onChange={(e) => setRateTVA(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="priceTTC" id="priceTTC" placeholder="Prix TTC en €" style={styleInput} value={priceTTC} onChange={(e) => setPriceTTC(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="durationDays" id="durationDays" placeholder="Nombre de jours de validité" style={styleInput} value={durationDays} onChange={(e) => setDurationDays(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="beginingDate" id="beginingDate" placeholder="Date de début" style={styleInput} value={beginingDate} onChange={(e) => setBeginingDate(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="endDate" id="endDate" placeholder="Date de fin" style={styleInput} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        </FormGroup>
                        {tabErrorsProductCreation}
                        {tabSuccessProductCreation}


                        <Row style={{ display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 40 }}>
                            <Button style={{ width: 200, backgroundColor: '#FDC41F', border: 'none', borderRadius: 50, margin: 10 }} onClick={() => handleSubmitProductCreation()}>VALIDER</Button>
                            <Button style={{ width: 200, backgroundColor: '#FDC41F', border: 'none', borderRadius: 50, margin: 10 }}>VISUALISER</Button>
                        </Row>

                    </Row>

                </Col>

                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    {/* VISUALISATION */}
                    
                    <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>VISUALISATION DE LA CRÉATION PRODUIT</p>

                    <div >
                        <Row style={styleAbond}>
                            <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 30, backgroundImage: 'url(./yellowstar1.png', width: 160, height: 160, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                                <p hidden style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>Nom Commercial</p>
                                <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>Nombre</p>
                                <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>POINTS</p>
                            </Row>
                            <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <p style={{ color: '#1F8A9E' }}>Prix TTC€</p>
                                <Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }}>HOP ! DANS MON PANIER !</Button>
                            </Row>
                        </Row>
                    </div>
                    <div >
                        <Row style={styleAbonn}>
                            <Row style={styleAbonnFirstRow}>
                                <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                                    <p hidden style={{ display: 'flex', textAlign: 'center', color: '#343a40', marginBottom: 0 }}>commercialName</p>
                                    <h5 style={{ display: 'flex', textAlign: 'center', color: '#FFFFFF', marginBottom: 0, }}>FORFAIT</h5>
                                    <h3 style={{ display: 'flex', textAlign: 'center', color: '#FFFFFF', marginBottom: 0 }}>SANS PUB</h3>
                                    <p style={{ display: 'flex', textAlign: 'center', color: '#FFFFFF', marginBottom: 0 }}>commitment</p>
                                </Col>
                            </Row>
                            <Row style={styleAbonnSecondRow}>
                                <Col xs={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <p style={{ textAlign: 'center', color: '#1F8A9E', marginBottom: 0 }}>priceTTC€ / mois</p>
                                    <p style={{ textAlign: 'center', color: '#1F8A9E', marginBottom: 0 }}>commitment</p>
                                </Col>
                                <Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50, }}>HOP ! DANS MON PANIER !</Button>
                            </Row>
                        </Row>
                    </div>
                    <div >
                        <Row style={styleCahier}>
                            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', borderTopLeftRadius: 19, borderTopRightRadius: 19, background: "linear-gradient( #8DAADC, #665EFF)", marginBottom: 20, width: 350 }}>
                                <Col xs={4} style={{ display: 'flex' }}>
                                    <img alt="" width='100%' src="./cahierEte.png" />
                                </Col>
                                <Col xs={8}>
                                    <h5 style={{ display: 'flex', alignItems: 'center', textAlign: 'center', color: '#FFFFFF', marginBottom: 0 }}>CAHIER DE VACANCES</h5>
                                </Col>
                            </Row>
                            <Row style={{ display: 'flex', flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center', paddingBottom: 10 }}>
                                <Col xs={12}>
                                    <h5 style={{ textAlign: 'center', color: '#1F8A9E', }}>period</h5>
                                </Col>
                                <Col xs={12}>
                                    <p style={{ textAlign: 'center', color: '#1F8A9E', }}>discipline</p>
                                </Col>
                                <Col xs={12}>
                                    <p style={{ textAlign: 'center', color: '#1F8A9E', }}>priceTTC€</p>
                                </Col>
                                <Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50, }}>HOP ! DANS MON PANIER !</Button>
                            </Row>
                        </Row>
                    </div>

                </Col>
            </Row>
        </div >

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
};

var styleAbond = {
    display: 'flex',
    flexDirection: 'column',
    width: 350,
    marginBottom: 10,
    border: '1px solid #D5DBDB',
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    boxShadow: '3px 3px 3px #D5DBDB',
};

var styleAbonn = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    border: '1px solid #D5DBDB',
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    boxShadow: '3px 3px 3px #D5DBDB',
    paddingLeft: 0,
    paddingRight: 0
};

var styleAbonnFirstRow = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopLeftRadius: 19,
    borderTopRightRadius: 19,
    background: "#FDC41F",
    marginBottom: 0,
    width: '100%',
    height: 100,
    paddingRight: 0,
    paddingLeft: 0
};

var styleAbonnSecondRow = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    marginBottom: 0,
    width: '100%',
    height: 100,
};

var styleCahier = {
    display: 'flex',
    flexDirection: 'column',
    width: 350,
    marginBottom: 10,
    border: '1px solid #D5DBDB',
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    boxShadow: '3px 3px 3px #D5DBDB'
};

function mapStateToProps(state) {
    return { token: state.token }
}

export default connect(
    mapStateToProps,
    null
)(ProductCreation);