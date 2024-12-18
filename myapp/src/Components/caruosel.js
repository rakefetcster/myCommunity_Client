import React from "react";
import Slider from "react-slick"; // Import the Slider component from React Slick
import OSMMap from "./osmmapComponent";

const Carousel = ({ data }) => {
  const settings = {
    // Example Slider settings (adjust as needed)
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="bigContainer">
            <div className="carusel_big_div">
              <div className="carusel_left_div">
                <div className="card">
                  <div className="cardWords">
                    Business Name:{item.name.replace(/_/g, " ")}{" "}
                  </div>
                  <div className="cardWords"> Adress: {item.full_address}</div>
                  <div className="cardWords">Type: {item.type}</div>
                  <div className="cardWords"> Rrating: {item.rating}</div>
                  <a
                    href={item.website}
                    className="no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Bsiness website{" "}
                  </a>
                  <a
                    href={item.reviews_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="cardWords"></div>
                    <button>Read Reviews on Google</button>{" "}
                    {/* Link to reviews page */}{" "}
                  </a>
                </div>
              </div>

              <div className="carusel_right_div">
                <OSMMap latitude={item.latitude} longitude={item.longitude} />
              </div>
            </div>
            {/* Review section */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
