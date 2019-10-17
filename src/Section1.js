import React from 'react'
import { Container } from "react-bootstrap";

const Section1 = (props) => {
    return (


        <div  >
            <Container>
                {/* <div className="section" > */}
                {/* <div className="statement">
                    <h1>The world's
                      biggest healthcare platform</h1>
                    <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                </div> */}
                <div className="tableau">
                    <img src={props.element.img} />
                    <h3>{props.element.title}</h3>
                    <p>{props.element.p}</p>

                </div>
            
                </Container>
            </div >

        
    )
}
export default Section1