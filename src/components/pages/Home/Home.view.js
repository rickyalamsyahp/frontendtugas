import React from "react";
import {ImageSliderData} from '../../Slider/ImageSlider.data';
import ImageSlider from '../../Slider/ImageSlider.view';
import Navbar from '../../Navbar/Navbar.view';

const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider slides={ImageSliderData} />
    </div>
  );
};

export default Home;
