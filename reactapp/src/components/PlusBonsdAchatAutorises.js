import React, {useState, useEffect} from 'react'
import { Row, Col, FormGroup, CustomInput } from 'reactstrap'
import { connect } from 'react-redux'





function PlusBonsdAchatAutorises(props) {

    const [autorised, setAutorised] = useState (false)


    const [culturDep, setCulturDep] = useState (false)
    const [sportEquipment, setSportEquipment] = useState (false)
    const [playStores, setPlayStores] = useState (false)
    const [cinemas, setCinemas] = useState (false)
    const [shows, setShows] = useState (false)
    const [hightTech, setHightTech] = useState (false)
    const [music, setMusic] = useState (false)
    const [sportswears, setSportswears] = useState (false)
    const [accesLuggages, setAccesLuggages] = useState (false)
    const [fashion, setFashion] = useState (false)
    const [shoes, setShoes] = useState (false)
    const [foodStores, setFoodStores] = useState (false)
    const [snack, setSnack] = useState (false)
    const [beauty, setBeauty] = useState (false)
    const [gift, setGift] = useState (false)

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


    /* TABLEAU D'OBJETS POUR LA MAP */

    var bonsdachatautorisesData = [
        { category: "ENSEIGNES CULTURELLES", stores: "Amazon, Fnac, Cultura...", url: "./icon_enseignes_culturelles.png" },
        { category: "EQUIPEMENT SPORTIF", stores: "Décathlon, Go Sport, Intersport...", url: "./icon_equipements_sportifs.png" },
        { category: "JEUX & JOUETS", stores: "La Grande Récré, King Jouet, Jouet Club...", url: "./icon_jeux_jouets.png" },
        { category: "CINÉMA", stores: "UGC, CGR, MK2...", url: "./icon_cinema.png" },
        { category: "SPECTACLES", stores: "Fnac, Cultura, Ticket Master...", url: "./icon_spectacle.png" },
        { category: "PRODUITS TECHNIQUES", stores: "Amazon, Fnac, Darty, Boulanger...", url: "./icon_produits_techniques.png" },
        { category: " MUSIQUE", stores: "Spotify, Deezer, Apple Music...", url: "./icon_musique.png" },
        { category: "SPORTSWEARS & STREETWEARS", stores: "Nike, Adidas, Levi's...", url: "./icon_sportswear.png" },
        { category: "ACCESSOIRES & BAGAGERIE", stores: "La Bagagerie, Mes Bagages, Delsey...", url: "./icon_bagagerie.png" },
        { category: "MODE", stores: "Urban Outfitters, Nike, Brandy Melville...", url: "./icon_mode.png" },
        { category: "CHAUSSURES", stores: "Nike, Vans, Adidas...", url: "./icon_chaussures.png" },
        { category: "ENSEIGNES GÉNÉRALISTES", stores: "Fnac, Amazon, Carrefour, Auchan...", url: "./icon_enseignes_generalistes.png" },
        { category: "SNACK", stores: "Starbucks, Uber Eats...", url: "./icon_snack.png" },
        { category: "BEAUTÉ", stores: "Sephora, Kiko, NYX, Body Shop...", url: "./icon_parfum.png" },
        { category: "DONS", stores: "WWF, Surfrider, SPA ...", url: "./icon_don.png" }
    ];

    var handleClickAutorised = () => {
        setAutorised (! autorised)

        if (autorised === true) {
            setCulturDep (true)
            setSportEquipment (true)
            setPlayStores (true)
            setCinemas (true)
            setShows (true)
            setHightTech (true)
            setMusic (true)
            setSportswears (true)
            setAccesLuggages (true)
            setFashion (true)
            setShoes (true)
            setFoodStores (true)
            setSnack (true)
            setBeauty (true)
            setGift (true)
        }
        

    }

    /* LA MAP */

    var bonsdachatautorisesCard = bonsdachatautorisesData.map(function (bondachat, i) {
        return <Col key={i} xs={12} md={3} style={styleCard}>
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 20, paddingBottom: 10 }}>
                <Col xs={2} >
                    <img alt="" width='200%' src={bondachat.url} />
                </Col>
                <Col xs={10} style={{ display: 'flex', justifyItems: 'center' }}>
                    <p style={{ color: '#1F8A9E', fontSize: 13, fontWeight: 'bold', marginBottom: 0 }}>{bondachat.category}</p>
                </Col>
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                <p style={{ color: '#1F8A9E', fontSize: 12, marginBottom: 10 }}>{bondachat.stores}</p>
                <FormGroup>
                    <div>
                        <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="" />
                    </div>
                </FormGroup>
            </div>
        </Col>
    });




    return (

        <div>

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

function mapStateToProps (state) {
    return {token: state.token}
}

export default connect(
    mapStateToProps,
    null
) (PlusBonsdAchatAutorises);
