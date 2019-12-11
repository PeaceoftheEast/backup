/**
 * Created by will on 23/01/19.
 */
import React from 'react';
import pic03 from '../images/pic03.jpg'
import banhMi from '../images/banhmibackground-reduce-2.png';
import ImageSpinner from './ImageSpinner';
import prawn from '../images/gallery/prawnie.jpg';
import lemongrassFries from '../images/gallery/lemongrass-chicken-fries.jpg';
import tofuBanhMi from '../images/gallery/tofu-banh-mi.jpg';
import slide1 from '../images/gallery/slide-1.png' ;
import slide2 from '../images/gallery/slide-2.png' ;
import slide3 from '../images/gallery/slide-3.png' ;
import slide4 from '../images/gallery/slide-4.png' ;
import slide5 from '../images/gallery/slide-5.png' ;
import slide6 from '../images/gallery/slide-6.png' ;
import slide7 from '../images/gallery/slide-7.png';  
import slide8 from '../images/gallery/slide-8.png' ;
import slide9 from '../images/gallery/slide-9.png' ;
import slide10 from '../images/gallery/slide-10.png' ;
import slide11 from '../images/gallery/slide-11.png' ;

const Gallery = () => {
  let images = [slide1, slide2, slide3, slide4, slide5, slide6,slide7,slide8,slide9,slide10,slide11];
  return (
    <div>
      <h2 className="major">Gallery</h2>
      <ImageSpinner images={images} />
    </div>
  )
};

export default Gallery;