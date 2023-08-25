import React from 'react'
import { Row } from 'react-bootstrap'
import NumberDisplay from './NumberDisplay'
import ArticlesCarousel from './ArticlesCarousel'
import AboutUs from './AboutUs'
import Spacer from './Spacer'

const MainComponent = () => {
  return (
    <div className='container-fluid my-5'>
        <Row><ArticlesCarousel /></Row>
        <Row><AboutUs /></Row>
        <Spacer height="5rem" />
        <Row><NumberDisplay /></Row>
    </div>
    
  )
}

export default MainComponent