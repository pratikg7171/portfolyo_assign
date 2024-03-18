import parse from "html-react-parser";
import { useEffect, useState } from "react";
import ServicePopup from "./popup/ServicePopup";
import Image from 'next/image'; 

const apiUrl = process.env.API_URL;

const Service = ({ dark }) => {
  const [services, setServices] = useState([]);
  const [popupData, setPopupData] = useState({});
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('Fetched data:', data);
        if (data && data.user && data.user.services && Array.isArray(data.user.services)) {
          setServices(data.user.services);
          setTimeout(() => {
            let VanillaTilt = require("vanilla-tilt");
            VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
              maxTilt: 6,
              easing: "cubic-bezier(.03,.98,.52,.99)",
              speed: 500,
              transition: true,
            });
          }, 1000);
        } else {
          console.error('Invalid data format or no services available:', data);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const onClick = (index) => {
    setPopup(true);
    setPopupData(services[index]);
  };

  return (
    <div className="dizme_tm_section" id="service">
      <ServicePopup
        data={popupData}
        open={popup}
        close={() => setPopup(false)}
      />
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Services</span>
            <h3>What I Do for Clients</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="service_list">
              <ul>
                {services.length > 0 ? (
                  services.map((service, index) => (
                    <li
                      className={`wow ${(index * 1) % 2 === 0 ? "fadeInLeft" : "fadeInRight"}`}
                      data-wow-duration="1s"
                      key={index}
                      onClick={() => onClick(index)}
                    >
                      <div className="list_inner tilt-effect">
                        <img className="icon" src={service.image && service.image.url} alt={service.name} width={100} height={100} />
                        <div className="title">
                          <h3>{service.name}</h3>
                          <span className="price">Starts from <span>${service.charge}</span></span>
                        </div>
                        <div className="text">
                          <p>{service.desc}</p>
                        </div>
                        <a className="dizme_tm_full_link" href="#"></a>
                        <img className="popup_service_image" src={service.image && service.image.url} alt="image" />
                      </div>
                    </li>
                  ))
                ) : (
                  <li>No services available</li>
                )}
              </ul>
            </div>
          )}
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/service/5.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/service/6.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Service;
