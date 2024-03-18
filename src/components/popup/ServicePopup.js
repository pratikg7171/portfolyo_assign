import parse from "html-react-parser";
import Image from 'next/image'; 


const ServicePopup = ({ data, open, close }) => {
  if (!data || !open) {
    return null;
  }

  return (
    <div className={`dizme_tm_modalbox opened`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={close}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="service_popup_informations">
          <div className="image">
              {data.image && data.image.url && (
                <div className="image-container">
                  <Image src={data.image.url} alt="image" />
                  <div
                    className="main"
                    data-Image-url={data.image.url}
                    style={{ backgroundImage: `url(${data.image.url})` }}
                  />
                </div>
              )}
            </div>
            <div className="main_title">
              <h3>{data.name || "Title"}</h3>
              <span className="price">
                Starts from <span>${data.charge}</span>
              </span>
            </div>
            <div className="descriptions">
              {Array.isArray(data.desc) ? (
                data.desc.map((desc, i) => <p key={i}>{parse(desc)}</p>)
              ) : (
                <p>{parse(String(data.desc))}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePopup;
