import React from 'react'
import Section1 from './Section1'
import { Container } from "react-bootstrap"
const table = [
    {
        img: 'https://www.docplanner.com/img/flag.png',
        title: 'Leader in 10 countries',
        p: 'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile'
    },
    {
        img: 'https://www.docplanner.com/img/visits.png',
        title: ' 1.5 million appointments',
        p: 'booked last month'
    },
    {
        img: 'https://www.docplanner.com/img/patients.png',
        title: '30 million unique patients',
        p: 'visit us every month'

    },
    {
        img: 'https://www.docplanner.com/img/doctors.png',
        title: '2 million active doctors',
        p: 'trust in our solutions'

    }
]
const Table = () => {
    return (
        <div style={{ background: '#D5F5F6' }}>
            <Container>
                <div className="section" >

                    <div className="statement">
                        <h1 >The world's
          biggest healthcare platform</h1>
                        <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                    </div>

                    <div className="section1">
                        {table.map((el, index) => <Section1 key={index} element={el} />)}
                    </div>
                </div>
            </Container></div>
    )
}
export default Table