import React, { useState, useEffect } from 'react'
import { Row, Button, Col, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux'
import Header from './header.js'
import Footer from './footer.js'
import ProductCreation from './productcreation.js'
import AutorisationCardCreation from './autorisationCardCreation.js'



function HomeAdminScreen(props) {


    const [listErrorsSignup, setErrorsSignup] = useState([])


    const [adminInfo, setAdminInfo] = useState([])
    const [adminFirstName, setAdminFirstName] = useState('')
    const [adminLastName, setAdminLastName] = useState('')
    const [adminEmail, setAdminEmail] = useState('')

    // RÉCUPÉRATION DES DONNÉES ADMIN
    useEffect(() => {

        const findUser = async () => {
            const data = await fetch(`/loadingadmininfo?token=${props.token}`)
            const body = await data.json()

            if (body) {
                setAdminInfo(body)
                setAdminFirstName(body.adminFirstName)
                setAdminLastName(body.adminLastName)
                setAdminEmail(body.adminEmail)
            }
        }
        findUser()
    }, []);


    return (

        <div>

            <Header />

            <div style={{ marginLeft: 40, marginRight: 40 }}>

                <h5 style={{ textAlign: 'center', color: '#1F8A9E', fontWeight: 'bold', marginTop: 20, marginBottom: 20 }} >Hello {adminFirstName} !</h5>

                {/* BLOC FRESH NEWS */}
                <Row style={{display: 'flex', flexDirection: 'column', border: '1px solid #D5DBDB',borderRadius: 10, padding:30, marginTop:10, marginBottom:10}}>
                    <p style={{ color: '#1F8A9E', fontWeight: 'bold' }}>FRESH NEWS</p>
                    <Row style={{ display: 'flex', flexDirection: 'column', paddingLeft: 20 }}>
                        <p style={{ margin: 0 }}> - Pour souhaiter la bienvenue à Louise, notre nouvelle Social Manageuse, rdv à l'accueil pour un petite déj le 10 Septembre 2021.</p>
                        <p style={{ margin: 0 }}> - Pour les vacances de la Toussaint, l'application MULMUG prend des allures d'Halloween!</p>
                    </Row>
                </Row>


                {/* IMPORT CREATION D'UN PRODUIT */}


                <ProductCreation />
                <AutorisationCardCreation />


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


function mapStateToProps(state) {
    return { token: state.token }
}

export default connect(
    mapStateToProps,
    null
)(HomeAdminScreen);










