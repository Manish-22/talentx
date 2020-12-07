import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from './images/fishing.jpg'
import imageTwo from './images/cube.jpg'
import imageThree from './images/mountains.jpg';
import imagefour from './images/guitar.jpg';
import imagefive from './images/knit.jpg';

export default class MyCarousel extends Component {
    render() {
        return (
          <Carousel
          arrows
          animationSpeed={1500}
          autoPlay={3000}
          offset={50}
          itemWidth={1000}
          clickToChange
          centered
        >
          
            <img src={imageOne} alt='' width='1000px' height='500px'/>
            <img src={imageTwo} alt='' width='1000px' height='500px'/>
            <img src={imageThree} alt='' width='1000px' height='500px'/>
            <img src={imagefour} alt='' width='1000px' height='500px'/>
            <img src={imagefive} alt='' width='1000px' height='500px'/>
          </Carousel>
        );
}}