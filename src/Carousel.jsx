import React, { Component, Fragment } from "react";

class Carousel extends Component {
  state = { currentSlides: [{ src: "", headline: "" }], slideIndex: 0 };

  componentDidMount() {
    this.resetSlides();
  }

  resetSlides = () => {
    const { imageSrc } = this.props;
    const newImages = [...imageSrc];
    const currentSlides = [];

    while (newImages.length > 1) {
      const randIndex = Math.ceil(Math.random() * newImages.length - 1);
      const randImage = newImages.splice(randIndex, 1)[0];
      currentSlides.push(randImage);
    }

    currentSlides.push(newImages[0]);
    this.setState({ currentSlides, slideIndex: 0 });
  };

  moveSlideForward = () => {
    const { currentSlides, slideIndex } = this.state;
    if (slideIndex === currentSlides.length - 1) {
      this.resetSlides();
    } else {
      this.setState({ slideIndex: slideIndex + 1 });
    }
  };

  render() {
    const { slideIndex, currentSlides } = this.state;
    const currentSlide = currentSlides[slideIndex];
    const indicatorText = `${slideIndex + 1}/${currentSlides.length}`;

    return (
      <Fragment>
        <div className="slidebox">
          <img
            src={currentSlide.src}
            alt={currentSlide.headline}
            className="slide"
          />
        </div>
        <div className="headline">{currentSlide.headline}</div>
        <button onClick={this.moveSlideForward} className="advance-button">
          Advance Slide {indicatorText}
        </button>
      </Fragment>
    );
  }
}

export default Carousel;
