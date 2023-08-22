import React from 'react'
import ArticlesGroups from './ArticlesGroups'
import { Carousel, Row } from 'react-bootstrap'
import NumberDisplay from './NumberDisplay'
import ArticlesCarousel from './ArticlesCarousel'

const MainComponent = () => {
  return (
    <div className='container my-5' style={{backgroundColor : 'grey'}}>
        <Row><ArticlesCarousel /></Row>
        <Row><NumberDisplay /></Row>
    </div>
    
  )
}

export default MainComponent