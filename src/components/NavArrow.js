/**
 * Created by will on 01/02/19.
 */
import React from 'react';

const NavArrow = ({onClick, style, iconName}) => {
  return (
    <div role= "button" tabIndex="0" onClick={onClick} onKeyDown={onClick}>
      <i className={iconName}/>
    </div>
  )
};

export default NavArrow;