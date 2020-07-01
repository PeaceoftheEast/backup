/**
 * Created by will on 01/02/19.
 */
import React from 'react';
import NavArrow from './NavArrow';
class ImageSpinner extends React.Component {

  constructor(props) {
    super(props);
    this.handleLeftNav = this.handleLeftNav.bind(this);
    this.handleRightNav = this.handleRightNav.bind(this);

    this.state = {
      imageIndex: 0
    }
  }


  handleLeftNav() {
    if (this.state.imageIndex === 0) {
      this.setState({imageIndex: this.props.images.length - 1});
    }
    else {
      this.setState({imageIndex: this.state.imageIndex - 1})
    }
    console.log(this.state.imageIndex)
  }

  handleRightNav() {
    if (this.state.imageIndex === this.props.images.length - 1) {
      this.setState({imageIndex: 0});
    }
    else {
      this.setState({imageIndex: this.state.imageIndex + 1})

    }
    console.log(this.state.imageIndex)
  }

  render() {
    return ( 
      <div className="image-spinner">
        <div role="button" aria-label="Handle Left Nav" tabIndex="0" onClick={() => this.handleLeftNav()} onKeyDown={this.handleLeftNav}><img src={this.props.images[this.state.imageIndex]} alt="LeftNav"/></div>
        <NavArrow style={{NavArrow}} iconName="icon fa-caret-left" onClick={() => this.handleLeftNav()}/>
        <div role="button" aria-label="Handle Right Nav" tabIndex="0" onClick={() => this.handleRightNav()} onKeyDown={this.handleRightNav}><img src={this.props.images[this.state.imageIndex]} alt="RightNav"/></div>
        <NavArrow style={{NavArrow}} iconName="icon fa-caret-right" onClick={() => this.handleRightNav()}/>
      </div>)
  }


}

export default ImageSpinner;
