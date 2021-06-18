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
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
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
    <div className="pb-8">
      <Slider {...settings}>
        {data.map((coinInfo) => {
          const { chartData, coin, percentage } = coinInfo;
          return (
            <CoinCarouselItem
              key={coin.code}
              chartData={chartData}
              coinImageURL={getCryptoLogoImageURL(coin.imageName)}
              coinCode={coin.code}
              coinName={coin.name}
              percentage={percentage}
              price={coin.price}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default PopularCoinCarousel;
