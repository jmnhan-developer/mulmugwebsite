import React from 'react'
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';




function PlusBonsdAchatAutorises(props) {


    {/* TABLEAU D'OBJETS POUR LA MAP */ }

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

    {/* LA MAP */ }

    var bonsdachatautorisesCard = bonsdachatautorisesData.map(function (bondachat, i) {
        return <Col xs={12} md={3} style={styleCard}>
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: 20, paddingBottom: 10 }}>
                <Col xs={2} >
                    <img width='200%' src={bondachat.url} />
                </Col>
                <Col xs={10} style={{ display: 'flex', justifyItems: 'center' }}>
                    <p style={{ color: '#1F8A9E', fontSize: 13, fontWeight: 'bold', marginBottom: 0 }}>{bondachat.category}</p>
                </Col>
            </div>
            <div>
                <p style={{ color: '#1F8A9E', fontSize: 12, marginBottom: 10 }}>{bondachat.stores}</p>
            </div>
        </Col>
    });

    return (

        <div>

            <Row style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', marginTop: 20, marginBottom: 20, paddingLeft: 15, paddingRight: 15 }}>
                <h6 style={{ display: 'flex', justifyContent: 'center', color: '#1F8A9E' }}>CATEGORIES AUTORISÉES</h6>
                <p style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', color: '#1F8A9E' }}>(Prénom de l'élève) ne pourra demander de bons d'achat que dans les catégories que vous avez autorisées</p>
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
var styleOnglet = {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #1F8A9E'
};

var styleOngletSelected = {
    backgroundColor: '#1F8A9E',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
};

var styleTextOngletSelected = {
    display: 'flex',
    color: '#FFFFFF',
    textAlign: 'center'
};

var styleTextOnglet = {
    display: 'flex',
    color: '#1F8A9E',
    textAlign: 'center'
};

export default PlusBonsdAchatAutorises;