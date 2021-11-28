import React from "react";
import {ImageSliderData} from '../../Slider/ImageSlider.data';
import ImageSlider from '../../Slider/ImageSlider.view';
import Navbar from '../../Navbar/Navbar.view';
import Footer from "../../Footer/Footer.view";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider slides={ImageSliderData} />
      <Footer />
    </div>
  );
};

export default Home;
