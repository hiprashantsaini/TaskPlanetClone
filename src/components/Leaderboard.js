// Leaderboard.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import slide1 from "../components/assets/images/slide1.png";
import slide2 from "../components/assets/images/slide2.png";
import slide3 from "../components/assets/images/slide3.png";


const Leaderboard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

let styleData={
    width:"100%",
    maxHeight:'360px',
    objectFit: "cover", // Ensures image fills the container while maintaining aspect ratio
}

  return (
    <div className="leaderboard">
      <Slider {...settings}>
        <div >
          <img style={styleData} src={slide1}/>
        </div>
        <div>
          <img style={styleData} src={slide2}/>
        </div>
        <div>
          <img style={styleData} src={slide3}/>
        </div>
      </Slider>
    </div>
  );
};

export default Leaderboard;


