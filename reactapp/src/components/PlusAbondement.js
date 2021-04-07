import React, { useState, useEffect } from 'react'
import { Row, Col, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

function PlusAbondement(props) {


    const [productList, setProductList] = useState([])
    const [goToBasket, setGoToBasket] = useState(false)

    const [userInfo, setUserInfo] = useState([])
    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [studentFirstName, setStudentFirstName] = useState('')


    useEffect(() => {
        const findUser = async () => {
            const data = await fetch(`/users/loadinguserinfo?token=${props.token}`)
            const body = await data.json()
            if (body) {
                setUserInfo(body)
                setUserFirstName(body.userFirstName)
                setUserLastName(body.userLastName)
                setUserEmail(body.userEmail)
                setStudentFirstName(body.student[(0)].studentFirstName)
            }
        }
        findUser()
    }, [])

    useEffect(() => {
        const findProducts = async () => {
            const data = await fetch('/products/loadingabonddata')
            const body = await data.json()
            setProductList(body.products)
        }
        findProducts()
    }, [])

    var abondementCard = productList.map((e, i) => {
        return <Col key={i} xs={10} md={3} style={styleAbond}>
            <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 30, backgroundImage: 'url(./yellowstar1.png', width: 160, height: 160, alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                <p hidden style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>{e.commercialName}</p>
                <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>{e.nbrPoints}</p>
                <p style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 30, marginBottom: 1 }}>POINTS</p>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#1F8A9E' }}>{e.priceTTC}€</p>
                <Button onClick={() => { setGoToBasket(true); props.onSubmitproduct(e) }} style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50 }}>HOP ! DANS MON PANIER !</Button>
            </Row>
        </Col>
    });


    if (goToBasket === true) {
        return <Redirect to='/monpanier' />
    }

    return (

        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 15, paddingRight: 15, alignItems: 'center' }}>

            <Row style={{ display: 'flex', flexDirection: 'column', marginTop: 20, marginBottom: 20, textAlign: 'center' }}>
                <h5 style={{ display: 'flex', justifyContent: 'center', color: '#1F8A9E' }}>ABONDEMENT</h5>
                <p style={{ display: 'flex', justifyContent: 'center', color: '#1F8A9E' }}>Encouragez {studentFirstName} à travailler en le récompensant avec vos propres points !</p>
            </Row>

            <Col xs={11} style={{ display: 'flex', flexDirection: 'column', marginTop: 20, marginBottom: 20, background: 'linear-gradient(#54C5B4, #1F8A9E)', borderRadius: 10 }}>
                <h6 style={{ display: 'flex', justifyContent: 'center', color: '#FFFFFF', marginTop: 20 }}>MES ABONDEMENTS DE L'ANNÉE</h6>
                <Col xs={12} style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#FFFFFF', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding: 0 }}>
                    <p style={{ display: 'flex', width: '50%', justifyContent: 'center', margin: 0, borderRight: '1px solid #1F8A9E', color: '#1F8A9E' }}>Disponibles</p>
                    <p style={{ display: 'flex', width: '50%', justifyContent: 'center', margin: 0, borderLeft: '1px solid #1F8A9E', color: '#1F8A9E' }}>Gagnés par {studentFirstName }</p>
                </Col>
                <Col xs={12} style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#FDC41F', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, padding: 0, marginBottom: 20 }}>
                    <p style={{ display: 'flex', width: '50%', justifyContent: 'center', margin: 0, borderRight: '1px solid #1F8A9E', color: '#FFFFFF' }}>693 points</p>
                    <p style={{ display: 'flex', width: '50%', justifyContent: 'center', margin: 0, borderLeft: '1px solid #1F8A9E', color: '#FFFFFF' }}>307 points</p>
                </Col>
            </Col>

            {/* RESULTAT DE LA MAP */}
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 50 }}>
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

function mapStateToProps(state) {
    return { token: state.token }
}
function mapDispatchToProps(dispatch) {
    return {
        onSubmitproduct: function (product) {
            dispatch({ type: 'selectedAbondement', product: product })

        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlusAbondement);