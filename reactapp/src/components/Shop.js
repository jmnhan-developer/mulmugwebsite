import React from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom'


function Shop() {

    return (
        <Container style={{ display: 'flex', flexDirection: 'column', backgroundImage: 'url(./hpbackground.png)', height: '100vh', backgroundPosition: 'center', justifyContent: 'space-between' }}>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >

                <ul className="navbar-nav" >

                    <li className="nav-item active" >

                        <Link to="/" className="nav-link" > Home </Link>
                    </li >

                    <li className="nav-item" >

                        <Link to="/product" className="nav-link" > Cart </Link>
                    </li>
                </ul>
            </div >

            <Row>

            <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Picture</th>
                            <th scope="col">Model</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                            <th scope="col">Suppr</th>
                          </tr>
                        </thead>
                        </table>
     
    
                               
            </Row>

        </Container >

    )
}


var stylehpbutton1 = { width: 250, backgroundColor: '#FFC300', borderRadius: 10, outline: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecorationLine: 'none', color: "white" }

var stylehpbutton2 = { width: 250, backgroundColor: '#00B2C3', borderRadius: 10, outline: 'none', border: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecorationLine: 'none', color: "white" }



export default Shop;

