import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'reactstrap';
import Header from './header.js'
import Footer from './footer.js'
import { connect } from 'react-redux'
import PlusBonsdAchatAutorises from './PlusBonsdAchatAutorises.js'
import PlusAbondement from './PlusAbondement.js'
import PlusPlusForfaitSansPub from './PlusForfaitSansPub.js'
import PlusCahiersVacances from './PlusCahiersVacances.js'



function HomePageConnectedParentCopy(props) {

    const [userInfo, setUserInfo] = useState([])
    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [studentFirstName, setStudentFirstName] = useState('')

    useEffect(() => {

        const findUser = async () => {
            const data = await fetch(`/loadinguserinfo?token=${props.token}`)
            const body = await data.json()

            if (body) {
                setUserInfo(body)
                setUserFirstName(body.userFirstName)
                setUserLastName(body.userLastName)
                setUserEmail(body.userEmail)
                setStudentFirstName(body.student[(0)].studentFirstName)
            }
        }
        findUser()
    }, []);

    const [componentAutorisation, setComponentAutorisation] = useState(true)
    const [componentAbondement, setComponentAbondement] = useState(false)
    const [componentForfait, setComponentForfait] = useState(false)
    const [componentCahier, setComponentCahier] = useState(false)


    // ONGLET AUTORISATION
    var styleOngletAutorisation = { 
        backgroundColor: '#F2F3F4',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #FFFFFF',
        cursor:'pointer'
    };

    var handleClickAutorisation = () => {
        setComponentAutorisation(true);
        setComponentAbondement(false)
        setComponentForfait(false)
        setComponentCahier(false)
    }
    if (componentAutorisation === true) {
        var styleOngletAutorisation = {
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
        }
    } 

    // ONGLET ABONDEMENT
    var styleOngletAbondement = { 
        backgroundColor: '#F2F3F4',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #FFFFFF',
        cursor:'pointer'
    };
    
    var handleClickAbondement = () => {
        setComponentAutorisation(false);
        setComponentAbondement(true)
        setComponentForfait(false)
        setComponentCahier(false)
    }
    if (componentAbondement === true) {
        var styleOngletAbondement = {
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
        }
    } 

    // ONGLET FORFAIT
    var styleOngletForfait = { 
        backgroundColor: '#F2F3F4',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #FFFFFF',
        cursor:'pointer'
    };

    var handleClickForfait = () => {
        setComponentAutorisation(false);
        setComponentAbondement(false)
        setComponentForfait(true)
        setComponentCahier(false)
    }

    if (componentForfait === true) {
        var styleOngletForfait = {
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
        }
    }

    //ONGLET CAHIER
    var styleOngletCahier = { 
        backgroundColor: '#F2F3F4',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #FFFFFF',
        cursor:'pointer'
    };
    var handleClickCahier = () => {
        setComponentAutorisation(false);
        setComponentAbondement(false)
        setComponentForfait(false)
        setComponentCahier(true)
    }
    if (componentCahier === true) {
        var styleOngletCahier = {
            backgroundColor: '#FFFFFF',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
        }
    }



    return (
        <div>

            <Header />

            <div style={{ marginLeft: 5, marginRight: 5 }}>

                <Row style={{ display: 'flex', justifyContent: 'center', marginTop: 50, marginBottom: 30, paddingLeft: 15, paddingRight: 15 }}>
                    <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Bonjour {userFirstName} ! Bienvenue sur votre espace personnel de pilotage !</h4>
                </Row>
                {/* <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    <h6 style={{ color: '#1F8A9E', fontWeight: 'bold', textAlign: 'center' }}>PILOTAGE</h6>
                </Row> */}

                {/* LES ONGLETS */}
                <Row style={{ height: 50, paddingLeft: 15, paddingRight: 15, marginBottom: 20 }} >
                    <Col xs={3} onClick={() => handleClickAutorisation()} style={styleOngletAutorisation}>
                        <p style={styleTextOngletSelected} >Bons d'achat autorisés</p>
                    </Col>
                    <Col xs={3} onClick={() => handleClickAbondement()} style={styleOngletAbondement}>
                        <p style={styleTextOnglet}>Abondement</p>
                    </Col>
                    <Col xs={3} onClick={() => handleClickForfait()} style={styleOngletForfait}>
                        <p style={styleTextOnglet}>Forfait sans pub</p>
                    </Col>
                    <Col xs={3} onClick={() => handleClickCahier()} style={styleOngletCahier}>
                        <p style={styleTextOnglet}>Cahiers de vacances</p>
                    </Col>
                </Row>

                <div>
                    {
                        componentAutorisation ? <PlusBonsdAchatAutorises /> : null
                    }
                </div>
                <div>
                    {
                        componentAbondement ? <PlusAbondement /> : null
                    }
                </div>
                <div>
                    {
                        componentForfait ? <PlusPlusForfaitSansPub /> : null
                    }
                </div>
                <div>
                    {
                        componentCahier ? <PlusCahiersVacances /> : null
                    }
                </div>

                {/* <PlusBonsdAchatAutorises />
                <PlusAbondement />
                <PlusPlusForfaitSansPub />
                <PlusCahiersVacances /> */}

            </div>

            <Footer />

        </div>

    )
};

var styleTextOngletSelected = {
    display: 'flex',
    color: '#1F8A9E',
    textAlign: 'center',
    fontSize: 14,
    cursor:'pointer'
};

var styleTextOnglet = {
    display: 'flex',
    color: '#1F8A9E',
    textAlign: 'center',
    fontSize: 14,
    cursor: 'pointer'
};


function mapStateToProps(state) {
    return { token: state.token }
}

export default connect(
    mapStateToProps,
    null
)(HomePageConnectedParentCopy);
