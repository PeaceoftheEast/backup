import React from 'react'
import PropTypes from 'prop-types'


import logo from '../images/small-logo.png'


const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={logo} alt="Logo" className="icon"/>
            </div>
        <div className="content">
            <div className="inner">
                <h1>Peace of the East</h1>
                <p>Born in Vietnam, Bread in the UK.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About Us</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Food</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Gallery</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact Us</a></li>
            </ul>
        </nav>
    </header>
)

import logo from '../images/ncass.png'

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
