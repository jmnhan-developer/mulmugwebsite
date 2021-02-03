import React from 'react'
import { Container, Row, Nav, Button } from 'reactstrap';
import { Link } from 'react-router-dom'





function StudentNav() {


    return (
        <div style={{ backgroundColor: '#1F8A9E' }}>
            <Nav>
                <span className="navbar-brand" style={{display:'flex', flexDirection:'row', alignItems:'flex-end'}} >
                    <Link to="/"><img src="./logomulmug.png" width='30%' className="d-inline-block align-top" alt="logo" /></Link>
                </span>
                <Link to="/SellScreen" style={{ color: 'white', fontSize:15, textDecorationLine: 'none' }}>Cahier de vacances</Link>
                    <Link to="/SignUp" style={{ color: 'white', fontSize:15, textDecorationLine: 'none' }}>M'inscrire | Me connecter</Link>
                    <Link to="/ProfileScreen" style={{ color: 'white', fontSize:15, textDecorationLine: 'none' }}>Mon Profile</Link>
            </Nav>
        
            <hr style={{ margin: 0 }} />
        </div>

    )
}



export default StudentNav;