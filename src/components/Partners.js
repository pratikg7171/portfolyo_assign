import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
const apiUrl = process.env.API_URL;

const Partners = ({ dark }) => {
  const [socialHandles, setSocialHandles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fatchData(apiUrl); 
        setSocialHandles(fetchedData.user.social_handles); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_partners">
        <div className="container">
          <h2 style={{textAlign: 'center', marginBottom: '40px'}}>Connect with Me!</h2>
          <div className="partners_inner">
            <ul>
              {socialHandles &&
                socialHandles.map((handle, i) => (
                  <li
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    key={i}
                    data-wow-delay={`0.${i + 1 * 2}s`}
                  >
                    <div className="list_inner">
                      <img
                        src={handle.image && handle.image.url}
                        alt={handle.platform}
                      />
                      <a className="dizme_tm_full_link" href={handle.url} />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="/img/brushes/partners/1.png" alt="image"/>
        </div>
      </div>
    </div>
  );
};

export default Partners;
