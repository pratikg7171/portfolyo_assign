import { useEffect, useState } from "react";
import { activeSkillProgress, fatchData } from "../utilits";
import Image from 'next/image'; 

const apiUrl = process.env.API_URL;

const Skills = ({ dark }) => {
  const [data, setData] = useState({});
  const skillColors = ["#007bff", "#28a745", "#ffc107", "#dc3545", "#17a2b8"]; 

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

  const skillsToDisplay = data.user && data.user.skills ? data.user.skills.slice(0, 5) : [];

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
                <span>Design is Life</span>
                <h3>I Develop Skills Regularly to Keep Me Update</h3>
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
                    style={{ color: skillColors[i] }} 
                    key={i}
                  >
                    <span>
                      <span className="label">{skill.name}</span>
                      <span className="number">{skill.percentage}%</span>
                    </span>
                    <div className="background" >
                      <div className="bar" style={{ width: `${skill.percentage}%`, backgroundColor: skillColors[i] }}>
                        <div className="bar_in" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <Image src={`Image/skills/${dark ? 2 : 1}.jpg`} alt="Skills" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
