import React from 'react';
import Figure from 'react-bootstrap/Figure';


const Title = () => {
    return (
    <div className="title">
        <Figure>
            <Figure.Image
                width={150}
                height={150}
                alt="171x180"
                src="https://media.glassdoor.com/sqll/1071394/docplanner-squarelogo-1515684466717.png"
            />
            <Figure.Caption>
                <h1>Making the healthcare experience more human</h1>
  </Figure.Caption>
        </Figure>
    </div>
    )
}
export default Title;