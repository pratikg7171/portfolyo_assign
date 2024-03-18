import { useEffect, useState } from "react";
import { fatchData } from "../utilits";

const apiUrl = process.env.API_URL;

const CopyRight = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const userData = await fatchData(apiUrl); // Fetch user data from the API URL
        setUsername(userData.user.username); // Extract username from the user data
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, []);

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_copyright">
        <div className="container">
          <div className="inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <p>
                Developed with love by{" "}
                <a
                  href="https://themeforest.net/user/codeefly"
                  target="_blank"
                  rel="noreferrer"
                >
                  {username}
                </a>{" "}
                © {new Date().getFullYear()}
              </p>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <ul>
                <li>
                  <a href="#">{`Terms & Condition`}</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
