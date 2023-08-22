import React from 'react'
import test from '../assets/test.png'


const ImageC = () => {
  const styleObject = {  
    display: 'block',
    margin: '0 auto',
    maxWidth: '100%',
    height: 'auto',
  };

  return (
    <img src={test} className="centered-image" width={1000} style={styleObject} alt="Carousel Slide" />
  );
}


export default ImageC