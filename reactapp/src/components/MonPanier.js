import React, { useState, useEffect } from 'react';
import { Row, Col, Table } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import Header from './header.js'
import Footer from './footer.js'


const MonPanier = (props) => {

    console.log("Est ce que ça envoie bien dans mon panier", props.product)


    return (
        <div>

            <Header />

            <div style={{ paddingLeft: 15, paddingRight: 15 }}>
                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                    <h5 style={{ color: '#1F8A9E', textAlign: 'center' }}>Mon panier & Paiement</h5>
                </Row>
                <Row>
                    <Col xs={12} md={6} style={{ marginBottom: 30 }}>
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
                                        <td>{props.product.commercialName}</td>
                                        <td>{props.product.priceTTC}€</td>
                                        <td>Supp</td>
                                    </tr>
                                    <tr style={{ fontWeight: 'bold' }}>
                                        <th></th>
                                        <td>Total à payer</td>
                                        <td>89€</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <Link to="/homepageconnectedparent"><p style={{ marginTop: 10, marginBottom: 10 }}>Ajouter une autre commande</p></Link>
                    </Col>
                    <Col xs={12} md={6}>
                        <h6 style={{ color: '#1F8A9E', textAlign: 'center' }}>Paiement</h6>
                        <div style={{ border: '1px solid grey', borderRadius: 10 }}>

                            <p style={{ padding: 5 }}>STRIPE TO IMPLEMENT</p>

                        </div>

                    </Col>
                </Row>

            </div>

            <Footer />



        </div>

    )
}

function mapStateToProps(state) {
    return { token: state.token, product: state.product }
}

export default connect(
    mapStateToProps,
    null
)(MonPanier)

