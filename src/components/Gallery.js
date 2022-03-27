/**
 * Created by will on 23/01/19.
 */
import React from 'react';
import ImageSpinner from './ImageSpinner';
import slide1 from '../images/gallery/New Banner Compilation.png' ;
import slide2 from '../images/gallery/food pics compilation.png' ;
import slide3 from '../images/gallery/Sunshine_21.jpg' ;
import slide4 from '../images/gallery/newslide1-min.png' ;
import slide5 from '../images/gallery/newslide5-min.png' ;
import slide6 from '../images/gallery/newslide2-min.png' ;
import slide7 from '../images/gallery/frontage_1_crop-min.jpg.png' ;  
import slide8 from '../images/gallery/slide-9-min.png' ;
import slide9 from '../images/gallery/REDUCED_FILE_SIZE_Festival_Menu_.jpg' ;

const Gallery = () => {
  let images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9];
  return (
    <div>
      <h2 className="major">Gallery</h2>
      <ImageSpinner images={images} />
    </div>
  )
};

export default Gallery;