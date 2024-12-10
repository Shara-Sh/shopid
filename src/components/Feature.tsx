import feature from "../data/feature.json";
import Slider from "react-slick";

function Feature() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="space-y-3">
      <h1 className="text-center font-bold">Feature</h1>
      <div>
        <Slider {...settings}>
          {feature.map((feature, index) => (
            <img
              key={index}
              src={feature.image}
              alt={feature.name}
              className="aspect-square size-80 object-contain"
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Feature;
