import React from 'react';

class SmoothScrollingLinks extends React.Component {
  handleClick = (event, hash) => {
    event.preventDefault();
    const element = document.querySelector(hash);
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth' 
    });
    window.history.pushState({}, '', hash);
  };

  render() {
    return (
      <div>
        <a href="#section1" onClick={(e) => this.handleClick(e, '#section1')}>
          Section 1
        </a>
        <a href="#section2" onClick={(e) => this.handleClick(e, '#section2')}>
          Section 2
        </a>
        <div id="section1" style={{ height: '1000px' }}>
        </div>
        <div id="section2" style={{ height: '1000px' }}>
        </div>
      </div>
    );
  }
}

export default SmoothScrollingLinks;
