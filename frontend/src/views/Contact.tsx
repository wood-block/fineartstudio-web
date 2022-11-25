import { Gallery } from "../components";
import "./contact.css";

export const Contact = () => {
  return (
    <>
      <div className="address">
        <div className="address__map"></div>
        <div className="address__info">
          <div>ADDRESS: </div>
          <div>PHONE: </div>
          <div>H.P: </div>
          <div>E-MAIL: </div>
          <div>WEB SITE: </div>
          <div>STUDIO: </div>
        </div>
      </div>
      <div className="studio">
        <div className="studio__title">
          <h1>Studio</h1>
        </div>
        <Gallery />
      </div>
    </>
  );
};
