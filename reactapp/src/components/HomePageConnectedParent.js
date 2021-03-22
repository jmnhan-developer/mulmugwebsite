import React, {useState, useEffect} from 'react'
import { Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './header.js'
import Footer from './footer.js'
import {connect} from 'react-redux'
import PlusBonsdAchatAutorises from './PlusBonsdAchatAutorises.js'
import PlusAbondement from './PlusAbondement.js'
import PlusPlusForfaitSansPub from './PlusForfaitSansPub.js'
import PlusCahiersVacances from './PlusCahiersVacances.js'




function HomePageConnectedParent(props) {

    console.log ("Token from HomePage?", props.token)


    const [userInfo, setUserInfo] = useState ([])
    const [userFirstName, setUserFirstName] = useState ('')
    const [userLastName, setUserLastName] = useState ('')
    const [userEmail, setUserEmail] = useState('')

    useEffect (() => {

        const findUser = async() => {
            const data = await fetch(`/loadinguserinfo?token=${props.token}`)
            const body = await data.json()
            if(body){
                setUserInfo(body)
                setUserFirstName(body.userFirstName)
                setUserLastName(body.userLastName)
                setUserEmail(body.userEmail)
            }
        }
        findUser()  
    }, []);


    return (
        <div>

            <Header />

            <div style={{ marginLeft: 5, marginRight: 5 }}>

                <Row style={{ display: 'flex', justifyContent: 'center', marginTop: 50, marginBottom: 30, paddingLeft: 15, paddingRight: 15 }}>
                    <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Bonjour {userFirstName} ! Bienvenue sur votre espace personnel !</h4>
                </Row>
                <Row style={{display:'flex', justifyContent:'center'}}>
                <h6 style={{ color: '#1F8A9E', fontWeight:'bold',textAlign: 'center' }}>PILOTAGE</h6>
                </Row>

                {/* LES ONGLETS */}
                <Row style={{ height: 50, paddingLeft: 15, paddingRight: 15, marginBottom:20 }} >
                    <Col xs={3} style={styleOngletSelected}>
                        <Link to="/Mulmugplusabond" style={styleTextOngletSelected}>Bons d'achat autorisés</Link>
                    </Col>
                    <Col xs={3} style={styleOnglet}>
                        <Link to="/Mulmugplusabonn" style={styleTextOnglet}>Abondement</Link>
                    </Col>
                    <Col xs={3} style={styleOnglet}>
                        <Link to="/Mulmugpluscahiers" style={styleTextOnglet}>Forfaits sans pub</Link>
                    </Col>
                    <Col xs={3} style={styleOnglet}>
                        <Link to="/Mulmugpluscahiers" style={styleTextOnglet}>Cahiers de vacances</Link>
                    </Col>
                </Row>
                <PlusBonsdAchatAutorises/>
                <PlusAbondement/>
                <PlusPlusForfaitSansPub/>
                <PlusCahiersVacances/>

            </div>

            <Footer />

        </div>

    )
};

var styleOnglet = {
    backgroundColor: '#F2F3F4',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #FFFFFF'
};

var styleOngletSelected = {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
};

var styleTextOngletSelected = {
    display: 'flex',
    color: '#1F8A9E',
    textAlign: 'center',
    fontSize:14
    
};

var styleTextOnglet = {
    display: 'flex',
    color: '#1F8A9E',
    textAlign: 'center',
    fontSize:14
};


function mapStateToProps (state) {
    return {token: state.token}
}

export default connect(
    mapStateToProps,
    null
) (HomePageConnectedParent);
