import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ImageC from './ImageC';

function ArticlesCarousel() {
  return (
    <div className='p-5'>
      <h1 className='text-center pb-5'>Hell</h1>
      <Carousel>
        <Carousel.Item>
          <ImageC />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <a href="/article1">Read More</a> {/* Add a link to the full article */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageC />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="/article2">Read More</a> {/* Add a link to the full article */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageC />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <a href="/article3">Read More</a> {/* Add a link to the full article */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ArticlesCarousel;
