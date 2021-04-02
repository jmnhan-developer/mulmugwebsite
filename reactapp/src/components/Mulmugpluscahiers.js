import React, {useState, useEffect} from 'react'
import { Row, Button, Col } from 'reactstrap';
import { Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import Header from './header.js'
import Footer from './footer.js'



function MulmugPlusCahiers(props) {

    const [productList, setProductList] = useState([])

    useEffect(() => {
        const findProducts = async () => {
            const data = await fetch('/loadingcahierdata')
            const body = await data.json()
            setProductList(body.products)
        }
        findProducts()
    }, [])

    /* LA MAP */

    var cahierVacCard = productList.map((e, i) => {
        return <Col key={i} xs={10} md={3} style={styleCahier}>
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', borderTopLeftRadius: 19, borderTopRightRadius: 19, background: "linear-gradient( #8DAADC, #665EFF)", marginBottom: 20 }}>
                <Col xs={4} style={{ display: 'flex' }}>
                    <img alt="" width='100%' src="./cahierEte.png" />
                </Col>
                <Col xs={8}>
                    <h5 style={{ display: 'flex', alignItems:'center', textAlign: 'center', color: '#FFFFFF', marginBottom: 0 }}>CAHIER DE VACANCES</h5>
                </Col>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                <Col xs={12}>
                    <h5 style={{ textAlign: 'center', color: '#1F8A9E', }}>{e.period}</h5>
                </Col>
                <Col xs={12}>
                    <p style={{ textAlign: 'center', color: '#1F8A9E', }}>{e.discipline}</p>
                </Col>
                <Col xs={12}>
                    <p style={{ textAlign: 'center', color: '#1F8A9E', }}>{e.priceTTC}€</p>
                </Col>
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
                    <Col xs={4} style={styleOnglet}>
                        <Link to="/Mulmugplusabond" style={styleTextOnglet}>Abondement en Points</Link>
                    </Col>
                    <Col xs={4} style={styleOnglet}>
                        <Link to="/MulmugPlusForfaitSansPub" style={styleTextOnglet}>Forfait sans pub</Link>
                    </Col>
                    <Col xs={4} style={styleOngletSelected}>
                        <Link to="/Mulmugpluscahiers" style={styleTextOngletSelected}>Cahiers de vacances</Link>
                    </Col>
                </Row>
                <Row style={{ display: 'flex', flexDirection: 'column', paddingLeft: 15, paddingRight: 15, marginTop: 30 }}>
                    <h5 style={{ color: '#1F8A9E', textAlign: 'center', marginTop: 30, marginBottom: 30 }}>Pour que votre enfant revise pendant ses vacances et continuer de cumuler des points, vous pouvez souscrire un cahier de vacances. Mulmug lui proposera de manière aléatoire 5 exercices à faire par jour sur les chapitres déjà vus en classe.</h5>
                    <p style={{ color: '#1F8A9E', textAlign: 'center' }}>Sélectionnez le Cahier de Vacances que vous souhaitez:</p>
                </Row>




                {/* RESULTAT DE LA MAP */}
                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 50, paddingLeft: 15, paddingRight: 15 }}>
                    {cahierVacCard}
                </Row>

                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={() => { setGoToPage(true) }} style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }}>JE VEUX ACHETER UN CAHIER</Button>
                </Row>
            </div>

            <Footer />

        </div>

    )
}

var styleCahier = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
    border: '1px solid #D5DBDB',
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
    boxShadow: '3px 3px 3px #D5DBDB'
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
}

var styleOngletSelected = {
    backgroundColor: '#1F8A9E',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
}

var styleTextOngletSelected = {
    display: 'flex',
    color: '#FFFFFF',
    textAlign: 'center'
}

var styleTextOnglet = {
    display: 'flex',
    color: '#1F8A9E',
    textAlign: 'center'
}

function mapStateToProps(state) {
    return { token: state.token }
};
export default connect(
    mapStateToProps,
    null
)(MulmugPlusCahiers);
