import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import Image from 'next/image'; 

const Partners = ({ dark }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fatchData("/static/partners.json");
        setData(fetchedData);
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
          <div className="partners_inner">
            <ul>
              {data &&
                data.map((partner, i) => ( // Changed variable name from 'Image' to 'partner'
                  <li
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    key={i}
                    data-wow-delay={`0.${i + 1 * 2}s`}
                  >
                    <div className="list_inner">
                      <Image
                        src={partner.logo && partner.logo[dark ? "dark" : "light"]}
                        alt="image"
                        width={100} // Adjust width and height according to your requirement
                        height={100}
                      />
                      <a className="dizme_tm_full_link" href={partner.link} />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <Image src="/Image/brushes/partners/1.png" alt="image" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
