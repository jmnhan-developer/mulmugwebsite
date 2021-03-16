import React from 'react';
import {Row, Col, Table} from 'reactstrap';
import { Link } from 'react-router-dom'
import Header from './header.js'
import Footer from './footer.js'


function MonPanier(props) {

    return (
        <div>

            <Header />

            <div style={{ paddingLeft: 15, paddingRight: 15 }}>
                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                    <h5 style={{ color: '#1F8A9E', textAlign: 'center' }}>Mon panier & Paiement</h5>
                </Row>
                <Row>
                    <Col xs={12} md={6} style={{marginBottom:30}}>
                        <h6 style={{ color: '#1F8A9E', textAlign: 'center' }}>Mes commandes</h6>
                        <div style={{ border: '1px solid grey', borderRadius: 10 }}>
                            <Table borderless>
                                <thead>
                                    <tr style={{ color: '#1F8A9E' }}>
                                        <th>#</th>
                                        <th>Description de la commande</th>
                                        <th>Prix TTC</th>
                                        <th>Supp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Forfait sans pub avec engagement / 12 mois</td>
                                        <td>89€</td>
                                        <td>Supp</td>
                                    </tr>
                                    <tr style={{fontWeight:'bold'}}>
                                        <th></th>
                                        <td>Total à payer</td>
                                        <td>89€</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h6 style={{ color: '#1F8A9E', textAlign: 'center' }}>Paiment</h6>
                        <div style={{ border: '1px solid grey', borderRadius: 10 }}>

                            <p style={{padding:5}}>ihmihmihm</p>


                        </div>

                    </Col>
                </Row>

            </div>

            <Footer />



        </div>

    )
}


var stylehpbutton1 = { width: 250, backgroundColor: '#FFC300', borderRadius: 10, outline: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecorationLine: 'none', color: "white" }

var stylehpbutton2 = { width: 250, backgroundColor: '#00B2C3', borderRadius: 10, outline: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecorationLine: 'none', color: "white" }



export default MonPanier;

