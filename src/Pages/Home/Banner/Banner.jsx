import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src="https://i.ibb.co/ZfvHrkR/danielle-cerullo-3ck-WUna-Cxzc-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/FHpy8DS/michael-afonso-z8-Tul255k-Gg-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/Rg3ghdz/rainier-ridao-GRDp-Pp-Kczd-Y-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/7Yz4zW5/aditya-ali-Sz-I4-No8r-Q14-unsplash.jpg" />
        </div>
        <div>
          <img src="https://i.ibb.co/DwyWsbZ/ahmad-odeh-KHipn-Bn7sd-Y-unsplash.jpg" />
        </div>
      </Carousel>
    </div>
  );
};








export default Banner;
