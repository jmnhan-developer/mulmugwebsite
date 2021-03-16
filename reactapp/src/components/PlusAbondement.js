import React from 'react'
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';



function PlusAbondement() {


    {/* TABLEAU D'OBJETS POUR LA MAP */ }

    var abondementData = [
        { desc: "Abondement de 10 000 points", nbpoints: "10 000", point: "POINTS", price: "12.00€" },
        { desc: "Abondement de 20 000 points", nbpoints: "20 000", point: "POINTS", price: "23.50€" },
        { desc: "Abondement de 30 000 points", nbpoints: "30 000", point: "POINTS", price: "34.50€" },
        { desc: "Abondement de 40 000 points", nbpoints: "40 000", point: "POINTS", price: "45.00€" },
        { desc: "Abondement de 50 000 points", nbpoints: "50 000", point: "POINTS", price: "55.00€" },
    ];

    {/* LA MAP */ }

    var abondementCard = abondementData.map(function (abond, i) {
        return <Col xs={10} md={3} style={styleAbond}>
            <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 30, backgroundImage: 'url(./yellowstar1.png', width: 160, height: 160, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>{abond.nbpoints}</p>
                <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>{abond.point}</p>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#1F8A9E' }}>{abond.price}</p>
                <Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }}>HOP ! DANS MON PANIER !</Button>
            </Row>
        </Col>
    });

    return (

        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 15, paddingRight: 15, alignItems:'center'}}>

            <Row style={{ display: 'flex', flexDirection: 'column', marginTop: 20, marginBottom: 20, textAlign:'center' }}>
                <h6 style={{ display: 'flex', justifyContent: 'center', color: '#1F8A9E' }}>ABONDEMENT</h6>
                <p style={{ display: 'flex', justifyContent: 'center', color: '#1F8A9E' }}>Encouragez (Prénom de l'élève) à travailler en la récompensant avec vos propres points !</p>
            </Row>

            <Col xs={11} style={{ display: 'flex', flexDirection: 'column', marginTop: 20, marginBottom: 20, background:'linear-gradient(#54C5B4, #1F8A9E)', borderRadius:10 }}>
                <h6 style={{ display: 'flex', justifyContent: 'center', color: '#FFFFFF', marginTop:20 }}>MES ABONDEMENTS DE L'ANNÉE</h6>
                <Col xs={12} style={{display:'flex', flexDirection:'row', backgroundColor:'#FFFFFF', borderTopLeftRadius:10, borderTopRightRadius:10, padding:0}}>
                    <p style={{display:'flex', width:'50%', justifyContent:'center', margin:0, borderRight: '1px solid #1F8A9E', color:'#1F8A9E'}}>Disponibles</p>
                    <p style={{display:'flex', width:'50%', justifyContent:'center', margin:0, borderLeft: '1px solid #1F8A9E', color:'#1F8A9E'}}>Gagnés par (Prénom de l'élève)</p>
                </Col>
                <Col xs={12} style={{display:'flex', flexDirection:'row', backgroundColor:'#FDC41F', borderBottomLeftRadius:10, borderBottomRightRadius:10, padding:0, marginBottom:20}}>
                    <p style={{display:'flex', width:'50%', justifyContent:'center', margin:0, borderRight: '1px solid #1F8A9E', color:'#FFFFFF'}}>693 points</p>
                    <p style={{display:'flex', width:'50%', justifyContent:'center', margin:0, borderLeft: '1px solid #1F8A9E', color:'#FFFFFF'}}>307 points</p>
                </Col>
            </Col>

            {/* RESULTAT DE LA MAP */}
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop:20, marginBottom: 50 }}>
                {abondementCard}
            </Row>

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

export default PlusAbondement;