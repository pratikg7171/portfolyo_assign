import { useEffect, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const apiUrl = process.env.API_URL;

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // State variables
  const [filterKey, setFilterKey] = useState("*");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from API
    fetch(apiUrl) // Replace "YOUR_API_LINK" with your actual API endpoint
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.user.projects);
        setFilteredProjects(data.user.projects);
      }) // Assuming API response has projects key containing an array of projects
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  useEffect(() => {
    // Filter projects based on filterKey
    if (filterKey === "*") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) =>
          project.techStack.includes(filterKey)
        )
      );
    }
  }, [filterKey, projects]);

  const handleFilterKeyChange = (key) => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
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
                  onClick={() => handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("Reactjs")}`}
                  onClick={() => handleFilterKeyChange("Reactjs")}
                >
                  Reactjs
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("Nextjs")}`}
                  onClick={() => handleFilterKeyChange("Nextjs")}
                >
                  Nextjs
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("Mern")}`}
                  onClick={() => handleFilterKeyChange("Mern")}
                >
                  Mern
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("CSS")}`}
                  onClick={() => handleFilterKeyChange("CSS")}
                >
                  CSS
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("TailwindCSS")}`}
                  onClick={() => handleFilterKeyChange("TailwindCSS")}
                >
                  TailwindCSS
                </a>
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {filteredProjects.map((project, index) => (
                <li
                  className={`grid-item ${project.techStack.join(" ")}`}
                  key={index}
                >
                  <div className="inner">
                    <div
                      className="entry dizme_tm_portfolio_animation_wrap"
                      data-title={project.title}
                      data-category={project.techStack.join(" ")}
                    >
                      <a
                        href={project.liveurl || project.githuburl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={project.image.url} alt={project.title} />
                        <div
                          className="main"
                          data-img-url={project.image.url}
                        />
                      </a>
                    </div>
                    <div className="mobile_title">
                      <h3>{project.title}</h3>
                      <span>{project.techStack.join(", ")}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
