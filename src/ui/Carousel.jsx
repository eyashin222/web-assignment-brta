import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
            dots:false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container w-64 mx-auto mt-20 sm:w-full md:w-full md:mx-auto">
      <Slider {...settings}>
        <div className="mx-2 bg-stone-100">
          <img
            src="../../public/authority.jpeg"
            alt="Slide 1"
            className="h-64 w-full object-cover sm:h-80 sm:w-full"
          />
        </div>
        <div className="mx-2 bg-stone-100">
          <img
            src="../../public/notice.png"
            alt="Notice"
            className="h-64 w-full object-cover sm:h-80 sm:w-full"
          />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
