import React from 'react'
import { Dropdown } from 'react-bootstrap'


const ForCard = (props) => {
  return (
    <div className="card" style={{ background: props.infos.name === "For patient" ? '#00CCB1' : '#3D83DF' }}>
      <p>{props.infos.name}</p>
      <h4>{props.infos.title}</h4>
      <div className="img-pc">
        {props.infos.name === "For patient" ? (
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Choose Country
                </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">ARGENTINA</Dropdown.Item>
              <Dropdown.Item href="#">AUSTRALIA</Dropdown.Item>
              <Dropdown.Item href="#">BRASIL</Dropdown.Item>
              <Dropdown.Item href="#">CHILE</Dropdown.Item>
              <Dropdown.Item href="#">CZECH</Dropdown.Item>
              <Dropdown.Item href="#">FRANCE</Dropdown.Item>
              <Dropdown.Item href="#">ITALY</Dropdown.Item>
              <Dropdown.Item href="#">MEXICO</Dropdown.Item>
              <Dropdown.Item href="#">PERU</Dropdown.Item>
              <Dropdown.Item href="#">POLAND</Dropdown.Item>
              <Dropdown.Item href="#">PURTUGAL</Dropdown.Item>
              <Dropdown.Item href="#">SPAIN</Dropdown.Item>
              <Dropdown.Item href="#">TURKEY</Dropdown.Item>
              <Dropdown.Item href="#">UK</Dropdown.Item>



            </Dropdown.Menu>
          </Dropdown>
        ) :(<div></div>) }
        < img className="pc" src={props.infos.img} />
      </div>
    </div>
  )
}

export default ForCard