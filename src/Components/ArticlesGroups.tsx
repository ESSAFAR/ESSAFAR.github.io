import React from 'react'

import { Col, Row } from 'react-bootstrap';
import members from '../assets/members.png'
import ArticleCard from './ArticleCard';
import { Link } from 'react-router-dom';


const ArticlesGroups = () => {
  return (
    <div>
      
    <Row xs={1} md={3} className="g-1 p-5 m-5">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx} >
        <Link to={`/Article/${1}`} className='link'>
        <ArticleCard title='Title' description='lorem epsum....' imgWidth={25} image={members} />
        </Link>
        </Col>
      ))}
    </Row>
    </div>
  
);
}
  


export default ArticlesGroups