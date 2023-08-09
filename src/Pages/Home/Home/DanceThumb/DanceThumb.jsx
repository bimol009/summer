import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

import { SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../../Components/SectionTile/SectionTitle';


const DanceThumb = () => {

  
  return (
    <div className='mt-10'>
        <SectionTitle heading={"Dance Show"}>
            
        </SectionTitle>
        <AwesomeSlider animation="cubeAnimation"
        >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/19fSJJ3/Untitled-design.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/wh1FmPC/Untitled-design-1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/19fSJJ3/Untitled-design.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/X21LH6y/Untitled-design-2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/Cb56dJT/Untitled-design-3.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/XW4Lz9g/Untitled-design-4.png"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co/7yVKXKx/Untitled-design-5.png"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co/dBvyjb0/Untitled-design-6.png"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co/sJ9D7XY/Untitled-design-7.png"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co/znW5bC7/Untitled-design-8.png"
            alt=""
          />
        </SwiperSlide>

      </AwesomeSlider>
    </div>

    
    
    
    
    
    
    
    
  );
};

export default DanceThumb;
