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
          <p>CATER-INK have been providing a professional service at a range of events since 2019. Some of the private events we have catered for include...</p>
            <div className="image-container">
              <img src={hermes} alt="hermes logo"/>
              <img src={triplePoint} alt="triple point logo"/>
            </div>
          <p></p>
          <p>Our journey began back in 2017, when Callum (the lankey beanpole in the picture!), was disatisfied with his job propspects post-university. He decided to use his experience in the event catering industry to couple his two loves; festivals and food!</p>
          <p>Since starting in what can only be described as a rollercoaster of a journey, and continual setbacks. With a little help from Callum's Dad, Ian, in helping wilth the building of our stall, and of course the Mother, Sandra who has been helping to promote the buisness as much as possible, we've managed to come out of the otherside hungrier than ever (and hopefully all our potential customers!)</p>
          <p>After several events we've been encouraged by the continual positive feedback we've recieved from both members of the public and fellow festival traders. It's a pleasure to see people thoroughly enjoying the years of hardwork and passion that has gone into building something new and exciting to the industry.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Food</h2>
          <span className="image main"><img src={banhpic} alt="" /></span>
          <p>Our Peace of the East unit is continuing on with our hugely successful menu from 2021.</p>
          <p>Offering Chicken Katsu, Salt and Pepper Chicken Burgers, Duck Pancakes and the crowd pleaser Salt and Pepper Chips. Our menu has been designed to cater for as many dietary requirements as possible. We noticed that there can be limited options for vegans and have therefore provided 2 fantastic completely vegan options (along with all our sides) that we take just as much pride in!</p>
          <p>Our food is delicous, vibrant and is the perfect mix of being healthy and tasty</p>
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
