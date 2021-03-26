import React, {useState, useEffect} from 'react'
import { Row, Col, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'



function PlusCahiersVacances(props) {

    const [productList, setProductList] = useState([])
    const [goToBasket, setGoToBasket] = useState(false)

    const [userInfo, setUserInfo] = useState([])
    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [studentFirstName, setStudentFirstName] = useState('')


    useEffect(() => {
        const findUser = async () => {
            const data = await fetch(`/loadinguserinfo?token=${props.token}`)
            const body = await data.json()
            if (body) {
                setUserInfo(body)
                setUserFirstName(body.userFirstName)
                setUserLastName(body.userLastName)
                setUserEmail(body.userEmail)
                setStudentFirstName(body.student[(0)].studentFirstName)
                console.log("******Dans Abondement******", body.student[(0)].studentFirstName)
            }
        }
        findUser()
    }, [])

    useEffect(() => {
        const findProducts = async () => {
            const data = await fetch('/loadingcahierdata')
            const body = await data.json()
            setProductList(body.products)
        }
        findProducts()
    }, [])

    /* LA MAP */

    var cahierVacCard = productList.map((e, i) => {
        return <Col key={i} xs={10} md={3} style={styleCahier}>
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', borderTopLeftRadius: 19, borderTopRightRadius: 19, background: "linear-gradient( #8DAADC, #665EFF)", marginBottom: 20 }}>
                <Col xs={4} style={{ display: 'flex' }}>
                    <img alt="" width='100%' src="./cahierEte.png" />
                </Col>
                <Col xs={8}>
                    <p style={{ display: 'flex', textAlign: 'center', color: '#FFFFFF', marginBottom: 0 }}>CAHIER DE VACANCES</p>
                </Col>
            </Row>
            <Row style={{ display: 'flex', flexDirection: 'row', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, justifyContent:'center', paddingBottom:10 }}>
                <Col xs={12}>
                    <h6 style={{ textAlign: 'center', color: '#1F8A9E', }}>{e.period}</h6>
                </Col>
                <Col xs={12}>
                    <p style={{ textAlign: 'center', color: '#1F8A9E', }}>{e.discipline}</p>
                </Col>
                <Col xs={12}>
                    <p style={{ textAlign: 'center', color: '#1F8A9E', }}>{e.priceTTC}€</p>
                </Col>
                <Button onClick={() => { setGoToBasket(true); props.onSubmitproduct(e) }} style={{ backgroundColor: '#FDC41F', border: 'none', borderRadius: 50,  }}>HOP ! DANS MON PANIER !</Button>
            </Row>
        </Col>
    });

    if(goToBasket === true) {
        return <Redirect to='/monpanier' />
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 15, paddingRight: 15, alignItems: 'center' }}>
            <Row style={{ display: 'flex', flexDirection: 'column', marginTop: 20, marginBottom: 20, textAlign: 'center' }}>
                <h5 style={{ display: 'flex', justifyContent: 'center', color: '#1F8A9E' }}>CAHIERS DE VACANCES</h5>
                <p style={{ display: 'flex', justifyContent: 'center', color: '#1F8A9E' }}>Sélectionnez le cahier de vacances que vous souhaitez afin que {studentFirstName} puisse continuer à travailler pendant ses vacances...</p>
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

function mapStateToProps (state) {
    return {token: state.token}
}
function mapDispatchToProps (dispatch) {
    return {
        onSubmitproduct: function (product) {
            dispatch ({type:'selectedCahier', product: product})
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
) (PlusCahiersVacances);
