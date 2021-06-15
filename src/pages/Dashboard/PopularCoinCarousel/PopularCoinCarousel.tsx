import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type PopularCoinCarouselProps = {};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const PopularCoinCarousel: React.FC<PopularCoinCarouselProps> = () => {
  // const [selectedSlide, setSelectedSlide] = React.useState(0);
  // const handleOnChange = (value: number) => {
  //   console.log('🚀 ~ file: PopularCoinCarousel.tsx ~ line 10 ~ handleOnChange ~ value', value);
  //   setSelectedSlide(value);
  // };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/id/500/256/144" />
        </div>
        <div>
          <img src="https://picsum.photos/id/500/256/144" />
        </div>
        <div>
          <img src="https://picsum.photos/id/500/256/144" />
        </div>
        <div>
          <img src="https://picsum.photos/id/500/256/144" />
        </div>
        <div>
          <img src="https://picsum.photos/id/500/256/144" />
        </div>
        <div>
          <img src="https://picsum.photos/id/500/256/144" />
        </div>
        <div>
          <img src="https://picsum.photos/id/500/256/144" />
        </div>
      </Slider>
    </div>
  );
};

export default PopularCoinCarousel;
