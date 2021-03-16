import React from 'react'
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';




function PlusPlusForfaitSansPub(props) {


    {/* TABLEAU D'OBJETS POUR LA MAP */ }

    var forfaitSansPubData = [
        { desc: "Forfait sans pub mensuel sans engagement", name: "Abonnnement mensuel", formule: "FORFAIT", pub: "SANS PUB", enga: "sans engagement", price: "9,99€ / mois sans engagement" },
        { desc: "Forfait sans pub avec un engaement sur 12 mois", name: "Abonnement annuel", formule: "FORFAIT", pub: "SANS PUB", enga: "avec engagement", price: "7,99€ / mois avec un engagement sur 12 mois" },
    ];

    {/* LA MAP */ }

    var forfaitSansPubCard = forfaitSansPubData.map(function (forfait, i) {
        return <Col xs={10} md={3} style={styleAbonn}>
            <Row style={styleAbonnFirstRow}>
                <Col xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 5 }}>
                    <h5 style={{ display: 'flex', textAlign: 'center', color: '#FFFFFF', marginBottom: 0, }}>{forfait.formule}</h5>
                    <h3 style={{ display: 'flex', textAlign: 'center', color: '#FFFFFF', marginBottom: 0 }}>{forfait.pub}</h3>
                    <p style={{ display: 'flex', textAlign: 'center', color: '#343a40', marginBottom: 0 }}>{forfait.enga}</p>
                </Col>
            </Row>
            <Row style={styleAbonnSecondRow}>
                <Col xs={12}>
                    <p style={{ textAlign: 'center', color: '#1F8A9E', marginBottom: 0, height:40 }}>{forfait.price}</p>
                </Col>
                <Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50,  }}>HOP ! DANS MON PANIER !</Button>
            </Row>
        </Col>
    });

    return (

        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 15, paddingRight: 15, alignItems:'center'}}>

        <Row style={{ display: 'flex', flexDirection: 'column', marginTop: 20, marginBottom: 20, textAlign:'center' }}>
            <h6 style={{ display: 'flex', justifyContent: 'center', color: '#1F8A9E' }}>SOUSCRIRE À UN FORFAIT</h6>
            <p style={{ display: 'flex', justifyContent: 'center', color: '#1F8A9E' }}>Pour supprimer les pubs, vous pouvez souscrire à un forfait sans pub.</p>
        </Row>

        <Col xs={11} style={{ display: 'flex', flexDirection: 'column', marginTop: 30, marginBottom: 30, background:'linear-gradient(#54C5B4, #1F8A9E)', borderRadius:10 }}>
            <h6 style={{ display: 'flex', justifyContent: 'center', color: '#FFFFFF', marginTop:10, marginBottom:10 }}>SON FORFAIT</h6>
            <p style={{ display: 'flex', justifyContent: 'center', color: '#FFFFFF', marginTop:10, marginBottom:10 }}>Aucun forfait n'a été souscrit pour le moment.</p>
        </Col>

        {/* RESULTAT DE LA MAP */}
        <Row style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop:20, marginBottom: 50 }}>
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
    justifyContent:'center',
    borderBottomLeftRadius: 19,
    borderBottomRightRadius: 19,
    marginBottom: 0,
    width: '100%',
    height: 100,
}
var styleCard = {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    border: '#1F8A9E',
    borderRadius: 20,
    margin: 4,
    boxShadow: '4px 4px 4px #D5DBDB',
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

export default PlusPlusForfaitSansPub;