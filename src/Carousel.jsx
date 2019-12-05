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
      console.log(randIndex);
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

// 4. Under the slide, have a “Next” button.
// 5. When the “Next” button is tapped/clicked, show another slide but ensure it is not a repeat
// slide that the user has already seen.
// 6. After the user goes through all slides, start the process over again, with a new random
// order.
// 7. From a code standpoint, do all this as simply as you can and reuse anything on site as is
// helpful.
// Design Requirements
