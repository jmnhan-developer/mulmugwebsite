import React, { useState } from 'react'
import { Row, Button, Col, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux'
import Header from './header.js'
import Footer from './footer.js'



function HomeAdminScreen() {

    const [category, setCategory] = useState('')
    const [commercialName, setCommercialName] = useState('')
    const [commitment, setCommitment] = useState('')
    const [nbrPoints, setNbrPoints] = useState('')
    const [period, setPeriod] = useState('')
    const [discipline, setDiscipline] = useState('')
    const [grade, setGrade]  = useState('')
    const [priceHT, setPriceHT] = useState('')
    const [rateTVA, setRateTVA] = useState('')
    const [priceTTC, setPriceTTC] = useState('')
    const [durationDays, setDurationDays] = useState('')
    const [beginingDate, setBeginingDate] = useState('')
    const [endDate, setEndDate] = useState('')

    const [productExists, setProductExists] = useState(false)
    const [listErrorsSignup, setErrorsSignup] = useState([])


    // CRÉATION D'UN COMPTE ADMIN

    var handleSubmitProductCreation = async () => {
        
        const data = await fetch('/productcreation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `categoryFromFront=${category}&commercialNameFromFront=${commercialName}&commitmentFromFront=${commitment}&nbrPointsFromFront=${nbrPoints}&periodFromFront=${period}&disciplineFromFront=${discipline}&gradeFromFront=${grade}&priceHTFromFront=${priceHT}&rateTVAFromFront=${rateTVA}&priceTTCFromFront=${priceTTC}&durationDaysFromFront=${durationDays}&beginingDateFromFront=${beginingDate}&endDateFromFront=${endDate}`
        })

        console.log(data.body + "HELLO WORLD")

        const body = await data.json()

        if (body.result === true) {
            setProductExists(true)
        } else {
            setErrorsSignup(body.error)
        }

    }

    if (productExists) {
        return (<p style={{ fontSize: 20, color: '#FDC41F' }}>Un produit a bien été créé!</p>)
        // return <Redirect to='/homepageconnectedparent' />
    }

    var tabErrorsSignup = listErrorsSignup.map((error, i) => {
        return (<p style={{ color: 'red' }}>{error}</p>)
    })


    return (

        <div>

            <Header />

            <div>
                {/* CREATION D'UN PRODUIT */}

                <Row form style={{ display: 'flex', justifyContent: 'center', paddingLeft: 15, paddingRight: 15 }}>
                    <Col xs={12} md={6} style={{ width: 500 }}>
                        <FormGroup>
                            <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>CRÉER UN NOUVEAU PRODUIT</p>
                        </FormGroup>
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
                            <Input type="text" name="period" id="period" placeholder="Pour quelle période (Noël, Pâques...)" style={styleInput} value={period} onChange={(e) => setPeriod(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="discipline" id="discipline" placeholder="Matière (Mathématiques, Français, Anglais..." style={styleInput} value={discipline} onChange={(e) => setDiscipline(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="grade" id="grade" placeholder="Classe (6ème, 5ème,...)" style={styleInput} value={grade} onChange={(e) => setGrade(e.target.value)} />
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

                        {tabErrorsSignup}
                        <Row style={{ display: 'flex', justifyContent: 'center', marginTop: 40, marginBottom: 40 }}>
                            <Button style={{ width: 300, backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }} onClick={() => handleSubmitProductCreation()}>VALIDER</Button>
                        </Row>
                    </Col>


                    {/*  */}

                    <Col xs={12} md={6} style={{ width: 500 }}>

                        <Row style={{ display: 'flex', justifyContent: 'center', marginTop: 40, marginBottom: 40 }}>
                            <Button style={{ width: 300, backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }} >VALIDER</Button>
                        </Row>
                    </Col>
                </Row>

            </div>


            <Footer />

        </div>




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
)(HomeAdminScreen)









