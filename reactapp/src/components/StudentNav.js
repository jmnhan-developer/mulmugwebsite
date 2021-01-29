import React from 'react'
import { Button, Nav} from 'reactstrap';
import { Link } from 'react-router-dom'





function StudentNav() {


    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <Nav style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent:'flex-start', width:'100%', backgroundColor:'#1F8A9E'}}>
                <span className="navbar-brand" >
                    <Link to="/"><img src="./images/MULMUG_Logo_Secondaire(Blanc)_avec_sous_titre_transparent_RVB.png" width='15%' className="d-inline-block align-top" alt="logo" /></Link>
                </span>
                <Link to="/"><Button>Cahier de vacances</Button></Link>
            </Nav>
        </div>
    )
}

export default StudentNav;