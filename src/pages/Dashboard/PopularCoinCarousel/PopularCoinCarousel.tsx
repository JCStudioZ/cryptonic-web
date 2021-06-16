import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CoinCarouselItem from './CoinCarouselItem';

type PopularCoinCarouselProps = {};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PopularCoinCarousel: React.FC<PopularCoinCarouselProps> = () => {
  return (
    <div className="pb-8">
      <Slider {...settings}>
        <CoinCarouselItem />
        <CoinCarouselItem />
        <CoinCarouselItem />
        <CoinCarouselItem />
        <CoinCarouselItem />
      </Slider>
    </div>
  );
};

export default PopularCoinCarousel;
