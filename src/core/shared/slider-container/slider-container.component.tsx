import { useRef, ReactNode } from 'react';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { useSliderContainerStyles } from './slider-container.style';
interface SliderContainerProps {
  title: string;
  children: ReactNode[];
}

const SliderContainer = ({ title, children }: SliderContainerProps) => {
  const classes = useSliderContainerStyles();
  const carouselRef = useRef<CarouselRef>(null);

  return (
    <div className={classes.wrapper}>
      <div className={classes.sectionHeaderWithControls}>
        <h2 className={classes.header}>{title}</h2>

        <div className={classes.sliderNavigationBox}>
          <button
            className={classes.navButton}
            onClick={() => carouselRef.current?.prev()}
          >
            ‹
          </button>
          <button
            className={classes.navButton}
            onClick={() => carouselRef.current?.next()}
          >
            ›
          </button>
        </div>
      </div>

      <div className={classes.carouselWrapper}>
        <Carousel
          ref={carouselRef}
          dots={false}
          infinite={false}
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 1 } },
          ]}
        >
          {children.map((child, index) => (
            <div key={index} className={classes.carouselItemPadding}>
              {child}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SliderContainer;
