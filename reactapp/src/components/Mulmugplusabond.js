import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Header from './header.js'
import Footer from './footer.js'


function MulmugPlusAbond(props) {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        const findProducts = async () => {
            const data = await fetch('/products/loadingabonddata')
            const body = await data.json()
            setProductList(body.products)
        }
        findProducts()
    }, [])


    /* LA MAP */

    var abondementCard = productList.map((e, i) => {
        return <Col key={i} xs={10} md={3} style={styleAbond}>
            <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 30, backgroundImage: 'url(./yellowstar1.png', width: 160, height: 160, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <p hidden style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>{e.commercialName}</p>
                <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>{e.nbrPoints}</p>
                <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>POINTS</p>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#1F8A9E' }}>{e.priceTTC}€</p>
            </Row>
        </Col>
    });

    /* REDIRECTION SI TOKEN */
    const [goToPage, setGoToPage] = useState(false)

    if (goToPage === true) {
        if (props.token) {
            return <Redirect to='/homepageconnectedparent' />
        } else {
            return <Redirect to='/signinscreen' />
        };
    };


    return (

        <div>

            <Header />

            <div style={{ marginLeft: 20, marginRight: 20 }}>

                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30, paddingLeft: 15, paddingRight: 15 }}>
                    <h4 style={{ color: '#1F8A9E', textAlign: 'center' }}>Prêt à encourager votre enfant à apprendre en faisant des exercices !</h4>
                </Row>

                {/* LES ONGLETS */}
                <Row style={{ height: 50, paddingLeft: 15, paddingRight: 15 }} >
                    <Col xs={4} style={styleOngletSelected}>
                        <Link to="/Mulmugplusabond" style={styleTextOngletSelected}>Abondement en Points</Link>
                    </Col>
                    <Col xs={4} style={styleOnglet}>
                        <Link to="/MulmugPlusForfaitSansPub" style={styleTextOnglet}>Forfait sans pub</Link>
                    </Col>
                    <Col xs={4} style={styleOnglet}>
                        <Link to="/Mulmugpluscahiers" style={styleTextOnglet}>Cahiers de vacances</Link>
                    </Col>
                </Row>
                <Row style={{ display: 'flex', flexDirection: 'column', paddingLeft: 15, paddingRight: 15, marginTop: 30 }}>
                    <h5 style={{ color: '#1F8A9E', textAlign: 'center', marginTop: 30, marginBottom: 30 }}>Vous voulez l'encourager et le récompenser pour son travail et ses efforts avec vos propres points? Sélectionnez et souscrivez à l'un des Abondements, Mulmug lui attribuera vos points à chaque exercice correctement fait et à chaque passage de niveau.</h5>
                    <p style={{ color: '#1F8A9E', textAlign: 'center' }}>Sélectionnez l’abondement que vous souhaitez:</p>
                </Row>


                {/* RESULTAT DE LA MAP */}
                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 50, paddingLeft: 15, paddingRight: 15 }}>
                    {abondementCard}
                </Row>

                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={() => { setGoToPage(true) }} style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }}>OUI ! JE VEUX L'ENCOURAGER !</Button>
                </Row>
            </div>

            <Footer />

        </div>

    )
}

var styleAbond = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    border: '1px solid #D5DBDB',
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    boxShadow: '3px 3px 3px #D5DBDB',
};
var styleOnglet = {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #1F8A9E'
};

var styleOngletSelected = {
    backgroundColor: '#1F8A9E',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
};

var styleTextOngletSelected = {
    display: 'flex',
    color: '#FFFFFF',
    textAlign: 'center'
};

var styleTextOnglet = {
    display: 'flex',
    color: '#1F8A9E',
    textAlign: 'center'
};

function mapStateToProps(state) {
    return { token: state.token }
};
export default connect(
    mapStateToProps,
    null
)(MulmugPlusAbond);