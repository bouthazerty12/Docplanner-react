import React from 'react'
import { Container, Card, Button } from 'react-bootstrap'

const Galerie = () => {
    return (
        <Container>
            <div className="galerie">
                <div style={{ marginTop: '20px' }}>
                    <Card style={{ width: '20rem', border: 'none' }}>
                        <Card.Img style={{ borderRadius: '5px' }} variant="top" src="https://www.docplanner.com/images/warsaw.png" />
                        <Card.Body className="galerie-card">
                            <Card.Title className="title-card" style={{ fontSize: '15px' }}>Warsaw</Card.Title>
                            <Button className="btn-see" variant="primary" style={{ width: '120px', fontSize: '12px' }}>SEE OPENING'S</Button>
                        </Card.Body >
                    </Card>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Card style={{ width: '20rem', border: 'none' }}>
                        <Card.Img style={{ borderRadius: '5px' }} variant="top" src="https://www.docplanner.com/images/barcelona.png" />
                        <Card.Body className="galerie-card">
                            <Card.Title className="title-card" style={{ fontSize: '15px' }}>Barcelona</Card.Title>
                            <Button className="btn-see" variant="primary" style={{ width: '140px', fontSize: '12px' }}>SEE OPENING'S</Button>
                        </Card.Body >
                    </Card>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Card style={{ width: '20rem', border: 'none' }}>
                        <Card.Img style={{ borderRadius: '5px' }} variant="top" src="https://www.docplanner.com/images/istanbul.png" />
                        <Card.Body className="galerie-card">
                            <Card.Title className="title-card" style={{ fontSize: '15px' }}>Istanbul</Card.Title>
                            <Button className="btn-see" variant="primary" style={{ width: '140px', fontSize: '12px'  }}>SEE OPENING'S</Button>
                        </Card.Body >
                    </Card>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Card style={{ width: '20rem', border: 'none' }}>
                        <Card.Img style={{ borderRadius: '5px' }} variant="top" src="https://www.docplanner.com/images/rome.png" />
                        <Card.Body className="galerie-card">
                            <Card.Title className="title-card" style={{ fontSize: '15px' }}>Rome</Card.Title>
                            <Button className="btn-see" variant="primary" style={{ width: '140px', fontSize: '12px'  }}>SEE OPENING'S</Button>
                        </Card.Body >
                    </Card>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Card style={{ width: '20rem', border: 'none' }}>
                        <Card.Img style={{ borderRadius: '5px' }} variant="top" src="https://www.docplanner.com/images/mexico-city.png" />
                        <Card.Body className="galerie-card">
                            <Card.Title className="title-card" style={{ fontSize: '15px' }}>Mexico</Card.Title>
                            <Button className="btn-see" variant="primary" style={{ width: '140px', fontSize: '12px'  }}>SEE OPENING'S</Button>
                        </Card.Body >
                    </Card>
                </div>
                <div style={{ marginTop: '20px', }}>
                    <Card style={{ width: '20rem', border: 'none' }}>
                        <Card.Img style={{ borderRadius: '5px' }} variant="top" src="https://www.docplanner.com/images/curitiba.png" />
                        <Card.Body className="galerie-card">
                            <Card.Title className="title-card" style={{ fontSize: '15px' }}>Curitiba</Card.Title>
                            <Button className="btn-see" variant="primary" style={{ width: '140px', fontSize: '12px'  }}>SEE OPENING'S</Button>
                        </Card.Body >
                    </Card>
                </div>

            </div>
        </Container>
    )
}
export default Galerie