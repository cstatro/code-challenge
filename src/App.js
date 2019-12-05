import React from "react";
import "./App.css";
import Carousel from "./Carousel";
import { images } from "./data";

function App() {
  return (
    <div className="App">
      <Carousel imageSrc={images} />
    </div>
  );
}

export default App;
