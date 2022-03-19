import React from 'react'
import PropTypes from 'prop-types'

import MediaIcons from './MediaIcons';
import Gallery from './Gallery';

import banhpic from '../images/food_header_image-min.png'
import viethead from '../images/frontage_4.jpeg'
import hermes from '../images/hermes.png'
import triplePoint from '../images/triple-point.png'

class Main extends React.Component {
  
  handleClick = () => {
    this.focus();
  } 
  handleKeyDown = (ev) => {
    if (ev.keyCode=== 13) {
        this.focus()
        }
  }
  focus = () => this.ref.focus;
  
  handleRef = (component) => {
    this.ref = component;
  };
  
  
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About Us</h2>
          <span className="image main"><img src={viethead} alt="" /></span>
          <p>CATER-INK have been providing a professional service at a range of events of different sizes, offering a fully-flexible menu for specific needs and requirements. Some of the private events we have catered for include...</p>
            <div className="image-container">
              <img src={hermes} alt="hermes logo"/>
              <img src={triplePoint} alt="triple point logo"/>
            </div>
          <p></p>
          <p>Our experience within the catering industry, event catering and global food travel over the years, has allowed us to continually surpass expectation and satisfy the masses.</p>
          <p>We've formed great working relationships with event organisers in the past and we are always happy to help out other traders. </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Food</h2>
          <span className="image main"><img src={banhpic} alt="" /></span>
          <p>Our Peace of the East is continuing our successful menu from 2021.</p>
          <p>Offering Chicken Katsu, Salt and Pepper Chicken Burgers, Duck Pancakes and the crowd pleaser Salt and Pepper Chips. Our menu has been designed to cater for as many dietary requirements as possible. We noticed that there can be limited options for vegans and have therefore provided 2 fantastic completely vegan options (along with all our sides) that we take just as much pride in!</p>
          <p>Our food is delicous, vibrant and is the perfect mix of being healthy and delicious!</p>
          <p>All our ingredients are of course fresh and of the highest quality. Not forgetting of course our fun and friendly staff who come with free big smiles!</p>
          <p>We also work alongside our local environmental group, Climate Action Ilkley, and we're continually looking to improve our sustainability. Through using local suppliers, reducing our packaging to a minimum and recycling all our cooking oil.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <Gallery/>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact Us</h2>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" aria-label="hidden" name="bot-field" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" aria-label="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" aria-label="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" aria-label="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" aria-label="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" aria-label="reset" value="Reset" /></li>
            </ul>
          </form>
          <MediaIcons/>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
