import React, { useState } from 'react'
import { Row, Button, Col, FormGroup, Input, CustomInput } from 'reactstrap';



function AutorisationCardCreation () {

    const [category, setCategory] = useState ('')
    const [pictogramme, setPictogramme] = useState ('')
    const [brandPartner1, setBrandPartner1] = useState ('')
    const [brandPartner2, setBrandPartner2] = useState ('')
    const [brandPartner3, setBrandPartner3] = useState ('')
    const [brandPartner4, setBrandPartner4] = useState ('')
    const [brandPartner5, setBrandPartner5] = useState ('')
    const [brandPartner6, setBrandPartner6] = useState ('')
    const [brandPartner7, setBrandPartner7] = useState ('')
    const [brandPartner8, setBrandPartner8] = useState ('')
    const [brandPartner9, setBrandPartner9] = useState ('')
    const [brandPartner10, setBrandPartner10] = useState ('')
    const [brandPartner11, setBrandPartner11] = useState ('')
    const [brandPartner12, setBrandPartner12] = useState ('')

    const [autoCardExists, setAutoCardExists] = useState(false)

    const [listErrorsAutoCardCreation, setErrorsAutoCardCreation] = useState([])
    const [listSuccessAutoCardCreation, setSuccessAutoCardCreation] = useState([])


    var handleSubmitAutoCardCreation = async () => {

        const data = await fetch('/autorisationcards/autocardcreation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `categoryFromFront=${category}&brandPartner1FromFront=${brandPartner1}&brandPartner2FromFront=${brandPartner2}&brandPartner3FromFront=${brandPartner3}&brandPartner4FromFront=${brandPartner4}&brandPartner5FromFront=${brandPartner5}&brandPartner6FromFront=${brandPartner6}&brandPartner7FromFront=${brandPartner7}&brandPartner8FromFront=${brandPartner8}&brandPartner9FromFront=${brandPartner9}&brandPartner10FromFront=${brandPartner10}&brandPartner11FromFront=${brandPartner11}&brandPartner12FromFront=${brandPartner12}`
        })

        const body = await data.json()

        if (body.result === true) {
            setAutoCardExists(true)
            setCategory ('')
            setBrandPartner1 ('')
            setBrandPartner2 ('')
            setBrandPartner3 ('')
            setBrandPartner5 ('')
            setBrandPartner6 ('')
            setBrandPartner7 ('')
            setBrandPartner8 ('')
            setBrandPartner9 ('')
            setBrandPartner10 ('')
            setBrandPartner11 ('')
            setBrandPartner12 ('')
            setSuccessAutoCardCreation (body.success)
            setErrorsAutoCardCreation ([])
        } else {
            setErrorsAutoCardCreation (body.error)
        }
    }

    // if (autoCardExists) {
    //     return (<p style={{ fontSize: 20, color: '#FDC41F' }}>Une carte d'autorisation a été créée!</p>)
    // }

    var tabSuccessAutoCardCreation = listSuccessAutoCardCreation.map((success, i) => {
        return (<p style={{color:'red'}}>{success}</p> )
    })
    var tabErrorsAutoCardCreation = listErrorsAutoCardCreation.map((error, i) => {
        return (<p style={{color:'green'}}>{error}</p> )
    })

    return (

        <div style={{marginTop:20}}>

            <Row style={{display: 'flex', flexDirection: 'row', border: '1px solid #D5DBDB',borderRadius: 10, paddingRight: 15, paddingLeft: 15, paddingTop:30, paddingBottom:30 }}>

                <Col xs={12} md={6}>

                    {/*CREÉATION D'UNE CARTE PARTENAIRES}*/}

                    <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>CRÉER UNE NOUVELLE CARTE</p>

                    <Row form >
                        <FormGroup style={{width:'100%'}}>
                            <Input type="select" name="category" id="category" placeholder="Catégorie" style={styleInputClasse} value={category} onChange={(e) => setCategory(e.target.value)} >
                            <option >Catégorie</option>
                            <option>ENSEIGNES CULTURELLES</option>
                            <option>EQUIPEMENT SPORTIF</option>
                            <option>JEUX & JOUETS</option>
                            <option>CINÉMA</option>
                            <option>SPECTACLES</option>
                            <option>PRODUITS TECHNIQUES</option>
                            <option>MUSIQUE</option>
                            <option>SPORTSWEARS & STREETWEARS</option>
                            <option>ACCESSOIRES & BAGAGERIE</option>
                            <option>MODE</option>
                            <option>CHAUSSURES</option>
                            <option>ENSEIGNES GÉNÉRALISTES</option>
                            <option>SNACK</option>
                            <option>BEAUTÉ</option>
                            <option>DONS</option>
                            </Input>
                        </FormGroup>
                    </Row>

                    
                    <Row form style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                        {/* <FormGroup>
                            <Input type="text" name="pictogramme" id="pictogramme" placeholder="Pictogramme" style={styleInput} value={pictogramme} onChange={(e) => setPictogramme(e.target.value)} />
                        </FormGroup> */}
                        <FormGroup>
                            <Input type="text" name="brandPartner1" id="brandPartner1" placeholder="Marque partenaire 1" style={styleInput} value={brandPartner1} onChange={(e) => setBrandPartner1(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="brandPartner2" id="brandPartner2" placeholder="Marque partenaire 2" style={styleInput} value={brandPartner2} onChange={(e) => setBrandPartner2(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="brandPartner3" id="brandPartner3" placeholder="Marque partenaire 3" style={styleInput} value={brandPartner3} onChange={(e) => setBrandPartner3(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="brandPartner4" id="brandPartner4" placeholder="Marque partenaire 4" style={styleInput} value={brandPartner4} onChange={(e) => setBrandPartner4(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="brandPartner5" id="brandPartner5" placeholder="Marque partenaire 5" style={styleInput} value={brandPartner5} onChange={(e) => setBrandPartner5(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="brandPartner6" id="brandPartner6" placeholder="Marque partenaire 6" style={styleInput} value={brandPartner6} onChange={(e) => setBrandPartner6(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="brandPartner7" id="brandPartner7" placeholder="Marque partenaire 7" style={styleInput} value={brandPartner7} onChange={(e) => setBrandPartner7(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="brandPartner8" id="brandPartner8" placeholder="Marque partenaire 8" style={styleInput} value={brandPartner8} onChange={(e) => setBrandPartner8(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="brandPartner9" id="brandPartner9" placeholder="Marque partenaire 9" style={styleInput} value={brandPartner9} onChange={(e) => setBrandPartner9(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="brandPartner10" id="brandPartner10" placeholder="Marque partenaire 10" style={styleInput} value={brandPartner10} onChange={(e) => setBrandPartner10(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="brandPartner11" id="brandPartner11" placeholder="Marque partenaire 11" style={styleInput} value={brandPartner11} onChange={(e) => setBrandPartner11(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="brandPartner12" id="brandPartner12" placeholder="Marque partenaire 12" style={styleInput} value={brandPartner12} onChange={(e) => setBrandPartner12(e.target.value)} />
                        </FormGroup>
                    </Row>
                    {tabSuccessAutoCardCreation}
                    {tabErrorsAutoCardCreation}
                    <Row style={{ display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 40 }}>
                        <Button style={{ width: 200, backgroundColor: '#FDC41F', border: 'none', borderRadius: 50, margin:10 }} onClick={() => handleSubmitAutoCardCreation()}>VALIDER</Button>
                        <Button style={{ width: 200, backgroundColor: '#FDC41F', border: 'none', borderRadius: 50, margin:10 }}>VISUALISER</Button>
                    </Row>
                </Col>


                <Col xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    {/*CREÉATION D'UNE CARTE PARTENAIRES}*/}

                    <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>VISUALISATION DE LA CRÉATION CARTE AUTORISATION</p>
                    <div style={styleCard}>
                        <Row style={{ display: 'flex', flexDirection: 'row', paddingTop: 20, paddingBottom: 10, width:400 }}>
                            <Col xs={2} >
                                <img alt="" width='200%' src='' />
                            </Col>
                            <Col xs={10} style={{ display: 'flex', justifyItems: 'center' }}>
                            <p style={{ color: '#1F8A9E', fontSize: 13, fontWeight: 'bold', marginBottom: 0 }}>ENSEIGNES CULTURELLES</p>
                            </Col>
                        </Row>
                        <Row style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingLeft:15, paddingRight:15, justifyItems:'center'}}>
                            <p style={{ color: '#1F8A9E', fontSize: 12, marginBottom: 10 }}>Brand Partners...</p>
                            <FormGroup>
                                <div>
                                    <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="" />
                                 </div>
                            </FormGroup>
                        </Row>
                    </div>
                            
                </Col>
 
            </Row>
        </div>
    )
};

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

var styleCard = {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    border: '#1F8A9E',
    borderRadius: 20,
    margin: 4,
    boxShadow: '4px 4px 4px #D5DBDB',
};

export default AutorisationCardCreation;