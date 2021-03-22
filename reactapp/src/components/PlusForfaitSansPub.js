import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'





function PlusForfaitSansPub({token, onSubmitproduct}) {


    const [productList, setProductList] = useState([])
    const [goToBasket, setGoToBasket] = useState(false)

    useEffect(() => {
        const findProducts = async () => {
            const data = await fetch('/loadingforfaitdata')
            const body = await data.json()
            setProductList(body.products)
        }
        findProducts()
    }, [])


    /* LA MAP */

    var forfaitSansPubCard = productList.map((e, i) => {
        return <Col key={i} xs={10} md={3} style={styleAbonn}>
            <Row style={styleAbonnFirstRow}>
                <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                    <p hidden style={{ display: 'flex', textAlign: 'center', color: '#343a40', marginBottom: 0 }}>{e.commercialName}</p>
                    <h5 style={{ display: 'flex', textAlign: 'center', color: '#FFFFFF', marginBottom: 0, }}>FORFAIT</h5>
                    <h3 style={{ display: 'flex', textAlign: 'center', color: '#FFFFFF', marginBottom: 0 }}>SANS PUB</h3>
                    <p style={{ display: 'flex', textAlign: 'center', color: '#FFFFFF', marginBottom: 0 }}>{e.commitment}</p>
                </Col>
            </Row>
            <Row style={styleAbonnSecondRow}>
                <Col xs={12} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <p style={{ textAlign: 'center', color: '#1F8A9E', marginBottom: 0 }}>{e.priceTTC}€ / mois </p>
                    <p style={{ textAlign: 'center', color: '#1F8A9E', marginBottom: 0 }}>{e.commitment}</p>
                </Col>
                <Button onClick={() => { setGoToBasket(true); onSubmitproduct(e) }} style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50, }}>HOP ! DANS MON PANIER !</Button>
            </Row>
        </Col>
    });

    if(goToBasket === true) {
        return <Redirect to='/monpanier' />
    }

    return (

        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 15, paddingRight: 15, alignItems: 'center' }}>

            <Row style={{ display: 'flex', flexDirection: 'column', marginTop: 20, marginBottom: 20, textAlign: 'center' }}>
                <h6 style={{ display: 'flex', justifyContent: 'center', color: '#1F8A9E' }}>SOUSCRIRE À UN FORFAIT</h6>
                <p style={{ display: 'flex', justifyContent: 'center', color: '#1F8A9E' }}>Pour supprimer les pubs, vous pouvez souscrire à un forfait sans pub.</p>
            </Row>

            <Col xs={11} style={{ display: 'flex', flexDirection: 'column', marginTop: 30, marginBottom: 30, background: 'linear-gradient(#54C5B4, #1F8A9E)', borderRadius: 10 }}>
                <h6 style={{ display: 'flex', justifyContent: 'center', color: '#FFFFFF', marginTop: 10, marginBottom: 10 }}>SON FORFAIT</h6>
                <p style={{ display: 'flex', justifyContent: 'center', color: '#FFFFFF', marginTop: 10, marginBottom: 10 }}>Aucun forfait n'a été souscrit pour le moment.</p>
            </Col>

            {/* RESULTAT DE LA MAP */}
            <Row style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 50 }}>
                {forfaitSansPubCard}
            </Row>

        </div>

    )
}
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
}

function mapStateToProps (state) {
    return {token: state.token}
}
function mapDispatchToProps (dispatch) {
    return {
        onSubmitproduct: function (product) {
            dispatch ({type:'selectedForfaitSansPub', product: product})

        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (PlusForfaitSansPub);
