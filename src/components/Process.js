import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import Image from 'next/image'; 

const Process = ({ dark }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const fetchedData = await fatchData("/static/workProcess.json");
      setData(fetchedData);
    };

    fetchDataAsync();
  }, []);

  return (
    <div className="dizme_tm_section" id="process">
      <div className="dizme_tm_process">
        <div className="container">
          <div className="list">
            <ul>
              {data &&
                data.map((item, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="icon">
                        <span>
                          <img
                            className="brush"
                            src={`img/brushes/process${dark ? "/dark" : ""}/${i + 1}.png`}
                            alt="image"
                          />
                          {parse(item.icons[dark ? "dark" : "light"])}
                        </span>
                      </div>
                      <div className="title">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="text">
                        <p>{item.dec}</p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
