import React, { Component, Fragment } from "react";

class Carousel extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="slidebox">
          <img src="" alt="" className="slide" />
        </div>
        <button className="advance-button">Advance Slide</button>
      </Fragment>
    );
  }
}

export default Carousel;
