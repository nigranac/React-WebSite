import React, { useState } from "react";
import SwiftSlider from "react-swift-slider";

const Slider = ({ newsList }) => {

  const data = newsList.map((item, index) => {
    return {
      id: index,
      src: item.urlToImage,
    };
  });

  return (

  <SwiftSlider data={data} height={800}  >

  </SwiftSlider>
  
  );
};

export default Slider;
