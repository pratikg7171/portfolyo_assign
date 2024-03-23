import Image from 'next/image';

const BlogPopUp = ({ data, open, close }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      {data && (
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={() => close()}>
              <i className="icon-cancel" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="news_popup_informations">
              <div className="image">
                {data.icon && (
                  <img
                    src='img/news/1.png'
                    alt='image'
                    width={100}
                    height={100}
                  />
                )}
              </div>
              <div className="details">
                <h3>{data.jobTitle}</h3>
                <span>
                  <a href="#">{data.company_name}</a>
                </span>
                <div />
              </div>
              <div className="text">
                {data.bulletPoints && <p>{data.bulletPoints}</p>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPopUp;