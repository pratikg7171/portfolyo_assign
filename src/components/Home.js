import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import Image from 'next/image'; 

const apiUrl = process.env.API_URL;

const Home = ({ dark }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fatchData(apiUrl);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dizme_tm_section" id="home">
      <div className="dizme_tm_hero">
        <div
          className="background"
          data-Image-url={`Image/slider/${dark ? 2 : 1}.jpg`}
        />
        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
                <h3 className="orangeText">{`Hello, I'm`}</h3>
              </div>
              <div className="name">
                <h3>{data.user && data.user.about && data.user.about.name ? data.user.about.name : "Name"}</h3>
              </div>
              <div className="job">
                <p>
                  A <span className="greenText">{data.user && data.user.about && data.user.about.title ? data.user.about.title : "Title"}</span>{" "}
                  From <span className="purpleText">{data.user && data.user.about && data.user.about.address ? data.user.about.address : "Address"}</span>
                </p>
              </div>
              <div className="text">
                <p>{data.user && data.user.about && data.user.about.subTitle ? data.user.about.subTitle : "Description"}</p>
              </div>
              <div className="button">
                <div className="dizme_tm_button">
                  <a className="anchor" href="#about">
                    <span>About Me</span>
                  </a>
                </div>
                <div className="social">
                  <ul>
                    {data.user &&
                      data.user.social_handles &&
                      data.user.social_handles.map((social, i) => (
                        <li key={i}>
                          <a href={social.url}>
                            <Image
                              src={social.image.url}
                              alt={social.platform}
                              width={20}
                              height={20}
                            />
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="avatar">
              <div className="image">
                <Image
                  src={data.user && data.user.about && data.user.about.avatar && data.user.about.avatar.url}
                  alt="image"
                  width={150}
                  height={150}
                />

                {data.user &&
                  data.user.skills &&
                  data.user.skills.slice(0, 3).map(
                    (skill, i) =>
                      skill.image && (
                        <span
                          key={i}
                          className={`skills ${skill.name} anim_moveBottom`}
                          style={{
                            position: "absolute",
                            ...(i === 0 ? { top: "0", left: "-1%" } : {}),
                            ...(i === 1 ? { top: "11%", right:"38%" } : {}), 
                            ...(i === 2 ? { bottom: "0", left: "25%", transform: "translateX(-50%)" } : {}), 
                          }}
                        >
                          <Image 
                            src={skill.image.url}
                            alt={skill.name}
                            width={50}
                            height={50}
                          />
                        </span>
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className="dizme_tm_down">
          <a className="anchor" href="#process">
            <svg
              width="26px"
              height="100%"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.5",
              }}
            >
              <path
                id="wheel"
                d="M123.359,79.775l0,72.843"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
