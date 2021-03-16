import React from 'react'
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';



function PlusCahiersVacances() {


    {/* TABLEAU D'OBJETS POUR LA MAP */ }

    var cahierVacData = [
        { name: "Cahier de Vacances - Toussaint", url: "./cahierAutomne.png", holiday: "TOUSSAINTS", matiere: "Mathématiques", price: "4.99€" },
        { name: "Cahier de Vacances - Noël", url: "./cahierNoel.png", holiday: "NOËL", matiere: "Mathématiques", price: "5.99€" },
        { name: "Cahier de Vacances - Hiver", url: "./cahierHiver.png", holiday: "HIVER", matiere: "Mathématiques", price: "6.99€" },
        { name: "Cahier de Vacances - Pâques", url: "./cahierPrintemps.png", holiday: "PÂQUES", matiere: "Mathématiques", price: "7.99€" },
        { name: "Cahier de Vacances - Été", url: "./cahierEte.png", holiday: "ÉTÉ", matiere: "Mathématiques", price: "8.99€" },
    ];

    {/* LA MAP */ }

    var cahierVacCard = cahierVacData.map(function (cahier, i) {
        return <Col xs={10} md={3} style={styleCahier}>
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', borderTopLeftRadius: 19, borderTopRightRadius: 19, background: "linear-gradient( #8DAADC, #665EFF)", marginBottom: 20 }}>
                <Col xs={4} style={{ display: 'flex' }}>
                    <img width='100%' src={cahier.url} />
                </Col>
                <Col xs={8}>
                    <p style={{ display: 'flex', textAlign: 'center', color: '#FFFFFF', marginBottom: 0 }}>CAHIER DE VACANCES</p>
                </Col>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, justifyContent:'center', paddingBottom:10 }}>
                <Col xs={12}>
                    <h6 style={{ textAlign: 'center', color: '#1F8A9E', }}>{cahier.holiday}</h6>
                </Col>
                <Col xs={12}>
                    <p style={{ textAlign: 'center', color: '#1F8A9E', }}>{cahier.matiere}</p>
                </Col>
                <Col xs={12}>
                    <p style={{ textAlign: 'center', color: '#1F8A9E', }}>{cahier.price}</p>
                </Col>
                <Button style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50,  }}>HOP ! DANS MON PANIER !</Button>
            </Row>
        </Col>
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 15, paddingRight: 15, alignItems: 'center' }}>
            <Row style={{ display: 'flex', flexDirection: 'column', marginTop: 20, marginBottom: 20, textAlign: 'center' }}>
                <h6 style={{ display: 'flex', justifyContent: 'center', color: '#1F8A9E' }}>CAHIERS DE VACANCES</h6>
                <p style={{ display: 'flex', justifyContent: 'center', color: '#1F8A9E' }}>Sélectionnez le cahier de vacances que vous souhaitez:</p>
            </Row>
            <Row style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 50 }}>
                {cahierVacCard}
            </Row>
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
export default PlusCahiersVacances;