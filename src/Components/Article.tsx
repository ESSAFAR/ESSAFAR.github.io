import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Card from 'react-bootstrap/esm/Card'

interface Props {
  image : string;
  title : string;
  description : string;
  imgWidth : number
}

const Article = ({image, title, description, imgWidth} : Props) => {
  return (
    <Card border="primary" style={{ width: `${imgWidth}rem` }}>
      <Card.Img variant="Secondary" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>  )
}

export default Article