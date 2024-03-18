import Counter from "./Counter";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";

const apiUrl = process.env.API_URL;

const About = ({ dark }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fatchData(apiUrl);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter
                        end={
                          data.user &&
                          data.user.about &&
                          data.user.about.exp_year
                        }
                      />
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Experience
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter
                        end={
                          data.user &&
                          data.user.about &&
                          data.user.about.some_total
                        }
                      />
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div
                className="title wow fadeInUp"
                data-wow-duration="1s"
              >
                <span>{`I'm a `}{data.user && data.user.about && data.user.about.title}</span>
                <h3>{data.user && data.user.about && data.user.about.subTitle}</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  {data.user && data.user.about && data.user.about.description}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default About;
