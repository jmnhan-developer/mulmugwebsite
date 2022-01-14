import React, { useState, useEffect } from 'react'
import { Row, Col, CustomInput } from 'reactstrap'
import { connect } from 'react-redux'


function PlusBonsdAchatAutorises(props) {


    const [userInfo, setUserInfo] = useState([])
    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [studentFirstName, setStudentFirstName] = useState('')

    const [autorisationCardList, setAutorisationCardList] = useState([])

    // RECUPERER LES DONNÉES DU USER
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

    // RECUPERER LES DONNÉES DES AUTORISATION-CARDS
    useEffect(() => {
        const findAutorisationCard = async () => {
            const data = await fetch('/autorisationcards/loadingautorisationcards')
            const body = await data.json()
            setAutorisationCardList(body)
        }
        findAutorisationCard()
    }, [])

    const [autorized, setAutorized] = useState (true)


    // var handleClick = () => {
    //    autorized? setAutorized (false): setAutorized (true)
    // }


    /* TABLEAU D'OBJETS POUR LA MAP */

    // var bonsdachatautorisesData = [
    //     { category: "ENSEIGNES CULTURELLES", stores: "Amazon, Fnac, Cultura...", url: "./icon_enseignes_culturelles.png" },
    //     { category: "EQUIPEMENT SPORTIF", stores: "Décathlon, Go Sport, Intersport...", url: "./icon_equipements_sportifs.png" },
    //     { category: "JEUX & JOUETS", stores: "La Grande Récré, King Jouet, Jouet Club...", url: "./icon_jeux_jouets.png" },
    //     { category: "CINÉMA", stores: "UGC, CGR, MK2...", url: "./icon_cinema.png" },
    //     { category: "SPECTACLES", stores: "Fnac, Cultura, Ticket Master...", url: "./icon_spectacle.png" },
    //     { category: "PRODUITS TECHNIQUES", stores: "Amazon, Fnac, Darty, Boulanger...", url: "./icon_produits_techniques.png" },
    //     { category: " MUSIQUE", stores: "Spotify, Deezer, Apple Music...", url: "./icon_musique.png" },
    //     { category: "SPORTSWEARS & STREETWEARS", stores: "Nike, Adidas, Levi's...", url: "./icon_sportswear.png" },
    //     { category: "ACCESSOIRES & BAGAGERIE", stores: "La Bagagerie, Mes Bagages, Delsey...", url: "./icon_bagagerie.png" },
    //     { category: "MODE", stores: "Urban Outfitters, Nike, Brandy Melville...", url: "./icon_mode.png" },
    //     { category: "CHAUSSURES", stores: "Nike, Vans, Adidas...", url: "./icon_chaussures.png" },
    //     { category: "ENSEIGNES GÉNÉRALISTES", stores: "Fnac, Amazon, Carrefour, Auchan...", url: "./icon_enseignes_generalistes.png" },
    //     { category: "SNACK", stores: "Starbucks, Uber Eats...", url: "./icon_snack.png" },
    //     { category: "BEAUTÉ", stores: "Sephora, Kiko, NYX, Body Shop...", url: "./icon_parfum.png" },
    //     { category: "DONS", stores: "WWF, Surfrider, SPA ...", url: "./icon_don.png" }
    // ];


    /* LA MAP */

    var bonsdachatautorisesCard = autorisationCardList.map((e, i) => {
        return <Col key={i} xs={12} md={3} style={styleCard}>
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 20, paddingBottom: 10 }}>
                <Col xs={1} >
                    <img alt="" width='200%' src={''} />
                </Col>
                <Col xs={11} style={{ display: 'flex', justifyItems: 'center' }}>
                    <p style={{ color: '#1F8A9E', fontSize: 13, fontWeight: 'bold', marginBottom: 0 }}>{e.category}</p>
                </Col>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <p style={{ color: '#1F8A9E', fontSize: 12, marginBottom: 10 }}>{e.brandPartner1}, {e.brandPartner2}, {e.brandPartner3}...</p>
                <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="" />
            </div>
        </Col>
    });




    return (

        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 15, paddingRight: 15, alignItems: 'center' }}>

            <Row style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', marginTop: 20, marginBottom: 20, paddingLeft: 15, paddingRight: 15 }}>
                <h5 style={{ display: 'flex', justifyContent: 'center', color: '#1F8A9E' }}>CATEGORIES AUTORISÉES</h5>
                <p style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', color: '#1F8A9E' }}>{studentFirstName} ne pourra demander de bons d'achat que dans les catégories que vous avez autorisées.</p>
            </Row>

            {/* RESULTAT DE LA MAP */}
            <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginBottom: 50, paddingLeft: 15, paddingRight: 15 }}>
                {bonsdachatautorisesCard}
            </Row>


        </div>

    )
}

var styleCard = {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    border: '#1F8A9E',
    borderRadius: 20,
    margin: 4,
    boxShadow: '4px 4px 4px #D5DBDB',
};

function mapStateToProps(state) {
    return { token: state.token }
}

export default connect(
    mapStateToProps,
    null
)(PlusBonsdAchatAutorises);
