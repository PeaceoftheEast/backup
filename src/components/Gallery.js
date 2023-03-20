/**
 * Created by will on 23/01/19.
 */
import React from 'react';
import ImageSpinner from './ImageSpinner';
import slide1 from '../images/gallery/Gallery01.jpg' ;
import slide2 from '../images/gallery/Gallery02.jpg' ;
import slide3 from '../images/gallery/Gallery03.jpg' ;
import slide4 from '../images/gallery/Gallery04.jpg' ;
import slide5 from '../images/gallery/Gallery05.jpg' ;
import slide6 from '../images/gallery/Gallery06.jpg' ;
import slide7 from '../images/gallery/Gallery07.jpg' ;  
import slide8 from '../images/gallery/Gallery08.png' ;
import slide9 from '../images/gallery/Gallery09.jpg' ;
import slide10 from '../images/gallery/Gallery10.jpg' ;
import slide11 from '../images/gallery/Gallery11.jpg' ;

const Gallery = () => {
  let images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11];
  return (
    <div>
      <h2 className="major">Gallery</h2>
      <ImageSpinner images={images} />
    </div>
  )
};

export default Gallery;