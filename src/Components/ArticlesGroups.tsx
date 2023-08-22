import React from 'react'
import CardGroup from 'react-bootstrap/esm/CardGroup'
import Article from './Article'
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap';
import members from '../assets/members.png'


const ArticlesGroups = () => {
  return (
    <div className=''>
    <div className='h1 '>NEWS</div>
    <Row xs={1} md={3} className="g-1 p-5 m-5">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx} >
        <Article title='Title' description='lorem epsum....' imgWidth={25} image={members} />
        </Col>
      ))}
    </Row>
    </div>
  
);
}
  


export default ArticlesGroups