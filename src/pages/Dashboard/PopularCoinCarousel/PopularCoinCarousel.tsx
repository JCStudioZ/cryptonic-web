import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CoinCarouselItem from './CoinCarouselItem';
import { useQueryPopularCoins } from 'hooks/queries';
import { getCryptoLogoImageURL } from 'utils';

type PopularCoinCarouselProps = {};

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
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
  const { data } = useQueryPopularCoins();

  if (!data) {
    return null;
  }

  return (
    <Slider {...settings}>
      {data.map((coinInfo) => {
        const { chartData, code, imageName, name, change24h, price } = coinInfo;
        return (
          <CoinCarouselItem
            key={code}
            chartData={chartData}
            coinImageURL={getCryptoLogoImageURL(imageName)}
            coinCode={code}
            coinName={name}
            percentage={change24h}
            price={price}
          />
        );
      })}
    </Slider>
  );
};

export default PopularCoinCarousel;
