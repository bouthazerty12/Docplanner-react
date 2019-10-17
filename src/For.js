import React from 'react';
import ForCard from './ForCard'
import { Container } from 'react-bootstrap'


const t = [
    {
        name: 'For patient',
        title: 'Find a doctor, book a visit and solve any health-related doubt',
        img: "https://www.docplanner.com/img/screen-marketplace@2x.png"
    },
    {
        name: 'For doctors',
        title: 'Save time managing visits and cut no-shows by half',
        img: "https://www.docplanner.com/img/screen-saas@2x.png"
    }
]
const For = () => {
    return (
        <Container>
            <div className="card-list">
                {t.map((el, index) => <ForCard key={index} infos={el} />)}
            </div>
        </Container>
    )
}
export default For;