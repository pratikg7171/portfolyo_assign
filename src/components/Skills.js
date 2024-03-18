import { useEffect, useState } from "react";
import { activeSkillProgress, fatchData } from "../utilits";
import img from 'next/image'; 

const apiUrl = process.env.API_URL;

const Skills = ({ dark }) => {
  const [data, setData] = useState({});
  const orangeColor = "#FFA500"; // Orange color
  const maxContrast = 100; // Maximum contrast
  const minContrast = 50; // Minimum contrast

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await fatchData(apiUrl);
        setData(responseData);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);

    return () => {
      window.removeEventListener("scroll", activeSkillProgress);
    };
  }, []);

  const calculateContrast = (percentage) => {
    // Calculate contrast based on skill percentage
    return minContrast + (percentage / 100) * (maxContrast - minContrast);
  };

  const skillsToDisplay = data.user && data.user.skills ? data.user.skills : [];

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div
                className="dizme_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <span>{data.user && data.user.about && data.user.about.quote}</span>
                <h3>{data.user && data.user.about && data.user.about.subTitle}</h3>
                <p>
                  Most common methods for designing websites that work well on
                  desktop is responsive and adaptive design
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration="1s"
              >
                {skillsToDisplay.map((skill, i) => (
                  <div
                    className="progress_inner skillsInner___"
                    data-value={skill.percentage}
                    style={{ color: orangeColor, filter: `contrast(${calculateContrast(skill.percentage)}%)` }} 
                    key={i}
                  >
                    <span>
                      <span className="label">{skill.name}</span>
                      <span className="number">{skill.percentage}%</span>
                    </span>
                    <div className="background" >
                      <div className="bar" style={{ width: `${skill.percentage}%`, backgroundColor: orangeColor }}>
                        <div className="bar_in" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <img src={`img/skills/${dark ? 2 : 1}.jpg`} alt="Skills" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
