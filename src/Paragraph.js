import React from 'react'
import { Container } from 'react-bootstrap'


const tab = [
  {
    p: 'We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that s why we are always next to them: to help them find the best possible care. Anytime, anywhere.'
  },
  {
    p: 'We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.'
  }
]
const Paragraph = () => {
  return (
    <Container>
      <div className="paragraph">
      
      {  tab.map((el, index) => (
      <p className="para" key={index}>{el.p}</p>))}
      </div>
    </Container>
  )
}
export default Paragraph;