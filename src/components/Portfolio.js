import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover, fetchData } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import Image from 'next/image'; 

import { fatchData } from "../utilits";
const apiUrl = process.env.API_URL;

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
    fatchData(); 
  }, []);

  const [data, setData] = useState({});
  const [youtubeData, setYoutubeData] = useState([]);
  const [projectsData, setProjectsData] = useState([]);
  useEffect(async () => {
    const fetchedData = await fatchData(apiUrl);
    setData(fetchedData);
    if (fetchedData && fetchedData.user && fetchedData.user.youtube) {
      setYoutubeData(fetchedData.user.youtube);
    }
    if (fetchedData &&  fetchedData.user && fetchedData.user.projects) {
      setProjectsData(fetchedData.user.projects);
    }
  }, []);

  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  const [popup, setPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("youtube")}`}
                  onClick={handleFilterKeyChange("youtube")}
                >
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("projects")}`}
                  onClick={handleFilterKeyChange("projects")}
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {/* Mapping over fetched YouTube data */}
              {youtubeData && youtubeData.map((video, index) => (
                <li className="youtube grid-item" key={index}>
                  <div className="inner">
                    <div
                      className="entry dizme_tm_portfolio_animation_wrap"
                      data-title={video.title}
                      data-category="Youtube"
                    >
                      <a
                        className="popup-youtube"
                        href={`https://www.youtube.com/embed/${video.embedId}?autoplay=1`}
                      >
                        <Image src="Image/portfolio/1.jpg" alt="image" />
                        <div
                          className="main"
                          data-Image-url="Image/portfolio/1.jpg"
                        />
                      </a>
                    </div>
                    <div className="mobile_title">
                      <h3>{video.title}</h3>
                      <span>Youtube</span>
                    </div>
                  </div>
                </li>
              ))}
              {projectsData && projectsData.map((project, sequence) => (
                <li className="project grid-item" key={sequence}>
                  <div className="inner">
                    <div
                      className="entry dizme_tm_portfolio_animation_wrap"
                      data-title={project.title}
                      data-category="Projects"
                    >
                      <a
                        href={project.liveurl || project.githuburl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image src={project.image.url} alt="image" />
                        <div
                          className="main"
                          data-Image-url={project.image.url}
                        />
                      </a>
                    </div>
                    <div className="mobile_title">
                      <h3>{project.title}</h3>
                      <span>Projects</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <Image src="Image/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <Image src="Image/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
