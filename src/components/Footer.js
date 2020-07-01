import React from 'react'
import PropTypes from 'prop-types'

import MediaIcons from './MediaIcons';
import hygiene from '../images/Hygiene-Rating.png'
import ncass from '../images/ncass.png'


const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <div className="certificates">
          <img src={ncass} alt= "ncass logo"/>
         <img src={hygiene} alt= "hygiene logo"/>
        </div>
        <MediaIcons/>

    </footer>

)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
