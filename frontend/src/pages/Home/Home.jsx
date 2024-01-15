import React from "react";
import Button from "../../components/Button/Button";
import SliderOeuvre from "../../components/Slider/SliderOeuvre";
import "./home.css";
import Carousel from "../../components/Carousel/Carousel";

function Home() {
  return (
    <div>
      <Carousel />
      <Button text="Voir tous les artistes" />
      <SliderOeuvre />
      <Button text="Voir toutes les oeuvres" />
    </div>
  );
}

export default Home;
