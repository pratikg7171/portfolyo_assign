import { useEffect, useState } from "react";
import Image from 'next/image'; 

import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { fatchData } from "../utilits";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);
const apiUrl = process.env.API_URL;

const Testimonial = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await fatchData(apiUrl);
        setData(responseData);
      } catch (error) {
        console.error("Error fetching testimonials data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
  };

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_testimonials">
        <div className="dizme_tm_main_title" data-align="center">
          <span>Testimonials</span>
          <h3>What My Clients Say</h3>
          <p>
            Most common methods for designing websites that work well on desktop
            is responsive and adaptive design
          </p>
        </div>
        <div className="list_wrapper">
          <div className="total">
            <div className="in">
              <Swiper {...props} className="">
                {data && data.user && data.user.testimonials &&
                  data.user.testimonials.map((testimonial, i) => (
                    <SwiperSlide key={i}>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          width="200px"
                          height="200px"
                          viewBox="796 698 200 200"
                          enableBackground="new 796 698 200 200"
                          xmlSpace="preserve"
                          className="svg replaced-svg"
                        >
                          <g>
                            <path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z" />
                            <path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z" />
                          </g>
                        </svg>
                      </div>
                      <div className="text">
                        <p>{testimonial.review}</p>
                      </div>
                      <div className="short">
                        <div className="image">
                          <Image src={testimonial.image.url} alt={testimonial.name} />
                        </div>
                        <div className="detail">
                          <h3>{testimonial.name}</h3>
                          <span>{testimonial.position}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="owl-dots"></div>
            </div>
            <div className="left_details">
              {data && data.user && data.user.testimonials &&
                data.user.testimonials.map((testimonial, i) => (
                  i % 2 !== 0 && 
                  <div key={i} className={`det_image ${i === 1 ? 'one' : i === 3 ? 'three' : ''} wow fadeIn`} data-wow-duration="1s" style={{ backgroundImage: `url(${testimonial.image.url})` }} />
                ))}
            </div>
            <div className="right_details">
              {data && data.user && data.user.testimonials &&
                data.user.testimonials.map((testimonial, i) => (
                  i % 2 === 0 && 
                  <div key={i} className={`det_image ${i === 0 ? 'one' : i === 2 ? 'three' : ''} wow fadeIn`} data-wow-duration="1s" style={{ backgroundImage: `url(${testimonial.image.url})` }} />
                ))}
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInRight" data-wow-duration="1s">
          <Image src="Image/brushes/testimonials/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
