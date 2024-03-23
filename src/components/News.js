import { useEffect, useState } from "react";
import { fatchData } from "../utilits"; 
import BlogPopUp from "./popup/BlogPopUp";
const apiUrl = process.env.API_URL;

const News = () => {
  const [data, setData] = useState([]);
  const [popupData, setPopupData] = useState({});
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fatchData(apiUrl);
        setData(fetchedData.user.timeline.slice(0, 3)); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const openPopup = (blog) => {
    setPopupData(blog);
    setPopup(true);
  };

  return (
    <div className="dizme_tm_section" id="blog">
      <BlogPopUp open={popup} data={popupData} close={() => setPopup(false)} />
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>My Timeline</span>
            <h3>{`Work Experience and Achievements`}</h3>
          </div>
          <div className="news_list">
            <ul>
              {data.map((blog, i) => (
                <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                  <div className="list_inner">
                    <div className="image">
                      {blog.icon && <img src={blog.icon.url} alt="image" />}
                    </div>
                    <div className="details">
                      <span className="category">
                        <a href="#">{blog.company_name}</a>
                      </span>
                      <h3 className="title">
                        <a href="#">{blog.jobTitle}</a>
                      </h3>
                      <button
  onClick={() => openPopup(blog)}
  style={{
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    fontSize: '11px',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.2)',
  }}
>
  Read More
</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/1.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default News;
