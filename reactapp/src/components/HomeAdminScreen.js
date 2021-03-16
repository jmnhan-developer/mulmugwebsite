import React, { useState } from 'react'
import { Row, Button, Col, FormGroup, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Header from './header.js'
import Footer from './footer.js'



function HomeAdminScreen() {





    return (

        <div>

            <Header />

            <div style={{ marginLeft: 20, marginRight: 20 }}>

                {/* ECRAN DES ADMIN */}

                <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50, marginBottom: 30 }}>
                    <h5 style={{ color: '#1F8A9E', textAlign: 'center' }}>Work on progress !...</h5>
                </Row>

                

            </div>
            
            <Footer />
        </div>

    )
}

export default HomeAdminScreen